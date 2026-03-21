import axios from 'axios';
import React, { use, useState } from 'react'

const Addproducts = () => {

    // introduce hooks
    const[productname,setProductname]=useState("");
    const[description,setDescription]=useState("");
    const[productcost,setProductcost]=useState("");
    const[productphoto,setProductphoto]=useState("");

    //Declare three additional hooks
    const[loading,setLoading]=useState(false);
    const[success,setSuccess]=useState("");
    const[error,setError]=useState("")

    // create a function that will handle the submit action
    const handlesubmit=async(e)=>{
        //prevent the site from reloading
        e.preventDefault();

        //setLoading hook with a message(activate it)
        setLoading(true);
        setError("");
        setSuccess("");

        try{
            //Create a form data object
            const formData = new FormData()

            //append the form data with product details
            formData.append("product_name",productname);
            formData.append("description",description)
            formData.append("product_cost",productcost);
            formData.append("product_photo",productphoto)

            //interact with axios modules that will help you
            const response = await axios.post("https://yvonnesitanda.alwaysdata.net/api/add_product")

            // Set the loading hook back to default 
            setLoading(false);

            // Update the success hook with a message
            setSuccess(response.data.message);
            
            // Clear the hooks after successful submisiion
            setProductname("");
            setDescription("");
            setProductcost("");
            setProductphoto("");

            //clear the file input value
            e.target.reset()

            setTimeout(()=> {
                setSuccess("");
            },3000);
        }
        catch(error){
            // set Loading back to default
            setLoading(false);
        }
    }

  return (
    <div className='row justify-content-center mt-4'>
        <div className='col-md-6 card shadow p-4 bg-dark'>
            <h3 className='text-white'>Welcome to Add products</h3>
            {/*bind the loading hook */}
            {loading && <p className='text-success'>Loading...</p>}


            <form>
                <input type="text" 
                placeholder='Enter the product Name'
                className='form-control'
                required
                value={productname}
                onChange={(e) => setProductname(e.target.value)}/>
                <br />

                <input type="text"
                placeholder='Enter the product description'
                className='form-control'
                required 
                value={description}
                onChange={(e) => setDescription(e.target.value)}/>
                <br />

                <input type="number"
                placeholder='Enter the product cost'
                className='form-control'
                required
                value={productcost}
                onChange={(e) => setProductcost(e.target.value)} />
                <br />

                <label > Product Photo</label>
                <input type="file"
                className='form-control'
                required
                accept='image/'
                onChange={(e) => setProductphoto(e.target.file[0])} />

                <br /> <br /> <br />

                <input type="submit"
                value="Add Product"
                className='btn btn-outline-primary' />
                <br /> <br />
            </form>
        </div>
      
    </div>
  )
}

export default Addproducts
