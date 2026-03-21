import axios from 'axios'
import React, {use, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import myImage from "../assets/Personal Care_2026-03-12T093657.474Z.avif";
import "../css/Getproducts.css";

const Getproducts = () => {
    const [collapsed, setCollapsed] = useState(false);

  // initialize to help you manage the state of your application
  const[products,setProducts]=useState([])
  const[loading,setLoading]=useState(false)
  const[error,setError]=useState("")

  //Declare the navigate hook
  const navigate= useNavigate()


  // below we specify the image base url
   const img_url="https://yvonnesitanda.alwaysdata.net/static/images/"
  // Create a function to help you fetch the products from your API
  const fetchProducts=async() => {
    try{

      // Update the loading hook
      setLoading(true)
    // Interact with your endpoint for fetching the products
    const response = await axios.get("https://yvonnesitanda.alwaysdata.net/api/get_products")

    // Update the products hook with the response given from the APi
    setProducts(response.data)

    // Set the loading hook back to default
    setLoading(false)

    // Update the error hook with a message
    setError(error.message)

    }
    catch(error){
      setLoading(false)

    }
  }

  // WE shall use the useEffect hook. This hook enables use to automatically re render new features in case of any changes

  useEffect(() =>{
    fetchProducts()
  }, [])

  //console.log("The products fetched are", products)
  


  return (
   
  <div className={`main-layout ${collapsed ? "collapsed" : ""}`}>

    {/* ===== SIDEBAR ===== */}
    <div className="sidebar">

      {/* CATEGORY */}
      <div className="dropdown">
        <h4>Category</h4>
        <div className="dropdown-content">
          <p>Face Care</p>
          <p>Body Care</p>
          <p>Skin Conditions</p>
          <p>Sanitary</p>
          <p>Personal Wash</p>
          <p>Hygiene</p>
          <p>Oral Care</p>
          <p>Facial Tissues</p>
          <p>Deodorants</p>
          <p>Hair Care</p>
          <p>Shaving</p>
          <p>Psoriasis</p>
          <p>Sanitary Pads</p>
          <p>Essential Oils</p>
          <p>Mother Care</p>
          <p>Toilet Paper</p>
          <p>Intimate Hygiene</p>
        </div>
      </div>

      {/* BRANDS */}
      <div className="dropdown">
        <h4>Brands</h4>
        <div className="dropdown-content">
          <p>La Roche-Posay</p>
          <p>KETOPLUS</p>
          <p>OATVEEN</p>
          <p>EPIMOL</p>
          <p>MOLPED</p>
          <p>HAZELLIC</p>
          <p>DOVE</p>
          <p>BIO OIL</p>
        </div>
      </div>

      {/* CONDITIONS */}
      <div className="dropdown">
        <h4>Shop by Condition</h4>
        <div className="dropdown-content">
          <p>Eye Conditions</p>
          <p>Ear Conditions</p>
          <p>Pregnancy</p>
          <p>Cardiovascular</p>
        </div>
      </div>

      {/* SHOP CENTER */}
      <div className="dropdown">
        <h4>My Shop Center</h4>
        <div className="dropdown-content">
          <p>Chronic Conditions</p>
          <p>Sexual Health</p>
        </div>
      </div>

    </div>

    {/* ===== MAIN CONTENT ===== */}
    <div className="content">

      <img src={myImage} alt="banner" className="banner" />

      <b><h3 className="text-dark">Products</h3></b>
      <h4 className="text-danger">{error}</h4>

      <div className="products-grid">

        {products.map((product) => (
          <div className="product-card" key={product.product_id}>

            {/* UIVERSE CARD STYLE */}
            <div className="uiverse-card">

              <img 
                src={img_url + product.product_photo}
                alt="product"
                className="product_img"
              />

              <div className="uiverse-content">
                <b>{product.product_name}</b>
                <p>{product.product_description.slice(0, 50)}...</p>

                <h4>KES {product.product_cost}</h4>

                <button 
                  onClick={() => navigate("/makepayment", { state: { product } })}
                >
                  Purchase
                </button>
              </div>

            </div>

          </div>
        ))}

      </div>

    </div>

  </div>
);
}

export default Getproducts;
