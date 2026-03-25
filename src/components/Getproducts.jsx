import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from "../assets/Personal Care_2026-03-12T093657.474Z.avif";
import "../css/Getproducts.css";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Step 1: Filter states
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCondition, setSelectedCondition] = useState("");

  const navigate = useNavigate();
  const img_url = "https://yvonnesitanda.alwaysdata.net/static/images/";

  // Step 2: Sidebar options
  const categories = ["Face Care", "Body Care", "Skin Conditions", "Sanitary", "Personal Wash", "Hygiene", "Oral Care"];
  const brands = ["DOVE", "HAZELLIC", "BIO OIL", "EPIMOL", "MOLPED", "LAROCHE","KETOPLUS","EUCERIN", "OATVEEN"];
  const conditions = ["Eye Conditions", "Ear Conditions", "Pregnancy", "Cardiovascular"];

  // Step 3: Manual mapping of product IDs
  const productCategoryMap = { 1: "Face Care", 2: "Body Care", 3: "Body Care" }; 
  const productBrandMap = { 1: "LAROCHE", 2: "DOVE", 3: "KETOPLUS" , 4:"OATVEEN" ,5:"BIOOIL", 6:"EPIMOL", 7:"EUCERIN", 8:"MOLPED" , 9:"EUCERIN", 10:"EUCERIN",11:"EUCERIN", 12:"EUCERIN", 13:"EUCERIN", 14:"EUCERIN" , 15:"EUCERIN", 16:"LAROCHE", 17:"LAROCHE", 18:"LAROCHE" , 19:"LAROCHE",20:"LAROCHE", 21:"LAROCHE"};
  const productConditionMap = { 1: "Eye Conditions", 2: "Pregnancy", 3: "Skin Conditions" };

  // Step 4: Fetch products
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://yvonnesitanda.alwaysdata.net/api/get_products");
      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Step 5: Filter products using manual mapping
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

      {/* SIDEBAR */}
      <div className="sidebar">

        {/* CATEGORY */}
        <div className="dropdown">
          <h4>Category</h4>
          <div className="dropdown-content">
            {categories.map(cat => (
              <p key={cat} onClick={() => setSelectedCategory(cat)} className={selectedCategory === cat ? "active-category" : ""} style={{cursor:"pointer"}}>{cat}</p>
            ))}
            <p onClick={() => setSelectedCategory("")} className={selectedCategory === "" ? "active-category" : ""} style={{cursor:"pointer", fontStyle:"italic"}}>All</p>
          </div>
        </div>

        {/* BRANDS */}
        <div className="dropdown">
          <h4>Brands</h4>
          <div className="dropdown-content">
            {brands.map(b => (
              <p key={b} onClick={() => setSelectedBrand(b)} className={selectedBrand === b ? "active-category" : ""} style={{cursor:"pointer"}}>{b}</p>
            ))}
            <p onClick={() => setSelectedBrand("")} className={selectedBrand === "" ? "active-category" : ""} style={{cursor:"pointer", fontStyle:"italic"}}>All</p>
          </div>
        </div>

        {/* CONDITIONS */}
        <div className="dropdown">
          <h4>Shop by Condition</h4>
          <div className="dropdown-content">
            {conditions.map(c => (
              <p key={c} onClick={() => setSelectedCondition(c)} className={selectedCondition === c ? "active-category" : ""} style={{cursor:"pointer"}}>{c}</p>
            ))}
            <p onClick={() => setSelectedCondition("")} className={selectedCondition === "" ? "active-category" : ""} style={{cursor:"pointer", fontStyle:"italic"}}>All</p>
          </div>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="content">
        <img src={myImage} alt="banner" className="banner" />
        <h3><b>Products</b></h3>
        {loading && <p>Loading products...</p>}
        <h4 className="text-danger">{error}</h4>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div className="product-card" key={product.product_id}>
              <div className="uiverse-card">
                <img src={img_url + product.product_photo} alt={product.product_name} className="product_img"/>
                <div className="uiverse-content">
                  <b>{product.product_name}</b>
                  <p>{product.product_description.slice(0,50)}...</p>
                  <h4>KES {product.product_cost}</h4>
                  <button onClick={() => navigate("/makepayment", {state:{product}})}>Purchase</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Getproducts;