import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from "../assets/Personal Care_2026-03-12T093657.474Z.avif";
import "../css/Getproducts.css";

const Getproducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")) || []);
  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []);

  // 🔥 NEW: sidebar toggle
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const navigate = useNavigate();
  const img_url = "https://yvonnesitanda.alwaysdata.net/static/images/";

  const categories = ["Face Care", "Body Care", "Skin Conditions", "Sanitary", "Personal Wash", "Hygiene", "Oral Care"];
  const brands = ["DOVE", "HAZELLIC", "BIO OIL", "EPIMOL", "MOLPED", "LAROCHE","KETOPLUS","EUCERIN", "OATVEEN"];
  const conditions = ["Eye Conditions", "Ear Conditions", "Pregnancy", "Cardiovascular"];

  const productCategoryMap = { 1: "Face Care", 2: "Body Care", 3: "Body Care" }; 
  const productBrandMap = { 1: "LAROCHE", 2: "DOVE", 3: "KETOPLUS", 4:"OATVEEN",5:"BIOOIL", 6:"EPIMOL", 7:"EUCERIN", 8:"MOLPED" };
  const productConditionMap = { 1: "Eye Conditions", 2: "Pregnancy", 3: "Skin Conditions" };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://yvonnesitanda.alwaysdata.net/api/get_products");
      setProducts(res.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const toggleFavorite = (product) => {
    const exists = favorites.find(p => p.product_id === product.product_id);
    if (exists) {
      setFavorites(favorites.filter(p => p.product_id !== product.product_id));
    } else {
      setFavorites([...favorites, product]);
    }
  };

  const rateProduct = (id, rating) => {
    const updated = products.map(p =>
      p.product_id === id ? { ...p, rating } : p
    );
    setProducts(updated);
  };

  const filteredProducts = products.filter(p => {
    const category = productCategoryMap[p.product_id];
    const brand = productBrandMap[p.product_id];
    const condition = productConditionMap[p.product_id];

    return (
      (!selectedCategory || category === selectedCategory) &&
      (!selectedBrand || brand === selectedBrand) &&
      (!selectedCondition || condition === selectedCondition)
    );
  });

  return (
    <div className="main-layout">

      {/* 🔥 TOGGLE BUTTON */}
      <button className="toggle-btn" onClick={() => setSidebarOpen(!sidebarOpen)}>
        ☰
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>

        <div className="dropdown">
          <h4>Category</h4>
          {categories.map(cat => (
            <p key={cat} onClick={() => setSelectedCategory(cat)}>{cat}</p>
          ))}
        </div>

        <div className="dropdown">
          <h4>Brands</h4>
          {brands.map(b => (
            <p key={b} onClick={() => setSelectedBrand(b)}>{b}</p>
          ))}
        </div>

        <div className="dropdown">
          <h4>Condition</h4>
          {conditions.map(c => (
            <p key={c} onClick={() => setSelectedCondition(c)}>{c}</p>
          ))}
        </div>
        <button
  className="cart-nav-btn"
  onClick={() => navigate("/cart")}
>
  🛒 View Cart
</button>

      </div>

      {/* MAIN */}
      <div className={`content ${sidebarOpen ? "shifted" : "full"}`}>

        <img src={myImage} alt="banner" className="banner" />

        <h3>Products</h3>
        {loading && <p>Loading...</p>}
        <p className="error">{error}</p>

        <div className="products-grid">

          {filteredProducts.map(product => {

            const oldPrice = product.product_cost + 500;
            const isFav = favorites.find(p => p.product_id === product.product_id);

            return (
              <div className="mydawa-card" key={product.product_id}>

                <div className="discount">20% OFF</div>

                <div 
                  className={`wishlist ${isFav ? "active" : ""}`}
                  onClick={() => toggleFavorite(product)}
                >
                  ♥
                </div>

                <div className="image-box">
                  <img src={img_url + product.product_photo} alt="" />
                </div>

                <div className="card-body">

                  <p className="name">{product.product_name}</p>

                  <div className="stars">
                    {[1,2,3,4,5].map(star => (
                      <span
                        key={star}
                        onClick={() => rateProduct(product.product_id, star)}
                        className={product.rating >= star ? "active-star" : ""}
                      >
                        ⭐
                      </span>
                    ))}
                  </div>

                  <div className="price">
                    <span className="old">KES {oldPrice}</span>
                    <span className="new">KES {product.product_cost}</span>
                  </div>

                  {/* 🔥 BUTTONS */}
                  <div className="btn-group">
                    <button onClick={() => addToCart(product)}>
                      + Cart
                    </button>

                    <button 
                      className="buy-btn"
                      onClick={() => navigate("/makepayment", { state: { product } })}
                    >
                      Purchase
                    </button>
                  </div>

                </div>

              </div>
            )
          })}

        </div>

        <div className="features-strip">

  <div className="feature">
    <div className="icon">✔</div>
    <div>
      <h4>100% Authentic</h4>
      <p>Products directly sourced from brands</p>
    </div>
  </div>

  <div className="feature">
    <div className="icon">🚚</div>
    <div>
      <h4>Free Shipping</h4>
      <p>Get free delivery on orders above KES 3500</p>
    </div>
  </div>

  <div className="feature">
    <div className="icon">🔁</div>
    <div>
      <h4>Easy Returns</h4>
      <p>Simple and easy return process</p>
    </div>
  </div>

</div>
      </div>
    </div>
  )
}

export default Getproducts;