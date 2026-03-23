import axios from 'axios';
import React, { useState } from 'react';
import '../css/Addproducts.css';

const Addproducts = () => {

  // introduce hooks
  const [productname, setProductname] = useState("");
  const [description, setDescription] = useState("");
  const [productcost, setProductcost] = useState("");
  const [productphoto, setProductphoto] = useState("");

  //Declare three additional hooks
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // create a function that will handle the submit action
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formData = new FormData();
      formData.append("product_name", productname);
      formData.append("description", description);
      formData.append("product_cost", productcost);
      formData.append("product_photo", productphoto);

      const response = await axios.post("https://yvonnesitanda.alwaysdata.net/api/add_product", formData);

      setLoading(false);
      setSuccess(response.data.message || "Product added successfully!");

      setProductname("");
      setDescription("");
      setProductcost("");
      setProductphoto("");
      e.target.reset();

      setTimeout(() => setSuccess(""), 3000);

    } catch (err) {
      setLoading(false);
      setError(err.message || "Failed to add product!");
    }
  }

  return (
    <div className='addproduct-page row justify-content-center'>
      <div className='col-md-6 card addproduct-card p-4'>
        <h3 className='title text-center'>Add a New Product</h3>

        {loading && <p className='text-info'>Loading...</p>}
        {success && <p className='text-success'>{success}</p>}
        {error && <p className='text-danger'>{error}</p>}

        <form onSubmit={handlesubmit} className="addproduct-form">
          <input
            type="text"
            placeholder='Product Name'
            className='form-control'
            required
            value={productname}
            onChange={(e) => setProductname(e.target.value)}
          />
          <br />

          <input
            type="text"
            placeholder='Product Description'
            className='form-control'
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />

          <input
            type="number"
            placeholder='Product Cost'
            className='form-control'
            required
            value={productcost}
            onChange={(e) => setProductcost(e.target.value)}
          />
          <br />

          <label className="file-label">Product Photo</label>
          <input
            type="file"
            className='form-control'
            required
            accept='image/*'
            onChange={(e) => setProductphoto(e.target.files[0])}
          />
          <br />

          <input
            type="submit"
            value={loading ? "Adding..." : "Add Product"}
            className='btn addproduct-btn'
            disabled={loading}
          />
        </form>
      </div>
    </div>
  )
}

export default Addproducts;