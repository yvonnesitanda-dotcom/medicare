import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/Makepayment.css'

const Makepayment = () => {
    const { product } = useLocation().state || {}
    const navigate = useNavigate()
    const img_url = "https://yvonnesitanda.alwaysdata.net/static/images/"
    const [number, setNumber] = useState("")
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");

    const handlesubmit = async (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            const formdata = new FormData()
            formdata.append("phone", number)
            formdata.append("amount", product.product_cost)
            const response = await axios.post("https://yvonnesitanda.alwaysdata.net/api/mpesa_payment", formdata)
            setLoading(false)
            setSuccess(response.data.message)
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    }

    const handleCartClick = () => {
        const phone = prompt("Enter your phone number (254XXXXXXX)");
        if(phone){
            setNumber(phone);
            alert(`Phone number ${phone} received. Proceed to payment!`);
        }
    }

    return (
        <div className='row justify-content-center' style={{ padding: '20px' }}>
            <h1 className="text-success">Make Payment - Lipa na M-Pesa</h1>

            <div className="col-md-1">
                <input type="button"
                    className="btn btn-dark"
                    value=" Back"
                    onClick={() => navigate("/")} />
            </div>

            <div className="col-md-6 card shadow p-4">

                {/* Uiverse.io style card */}
                <div className="uiverse-card">
                    <div className="card-img">
                        <div className="img">
                            <img src={img_url + product.product_photo} alt={product.product_name} style={{ width: '100%', borderRadius: '10px' }} />
                        </div>
                    </div>

                    <div className="card-title">{product.product_name}</div>
                    <div className="card-subtitle">{product.product_description}</div>
                    <hr className="card-divider" />
                    <div className="card-footer">
                        <div className="card-price"><span>KES </span>{product.product_cost}</div>
                        <button className="card-btn" onClick={handleCartClick}>
                            🛒 Buy
                        </button>
                    </div>
                </div>

                {/* Payment form */}
                <div style={{ marginTop: '20px' }}>
                    <form onSubmit={handlesubmit}>
                        <h3 className="text-success">{success}</h3>
                        <h4 className="text-danger">{error}</h4>

                        <input type="number"
                            className='form-control'
                            placeholder='Enter Phone number 254XXXXXXX'
                            required
                            value={number}
                            onChange={(e) => setNumber(e.target.value)} /> <br />

                        <input type="submit"
                            value={loading ? "Processing..." : "Make Payment"}
                            className='btn btn-success' disabled={loading} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Makepayment;