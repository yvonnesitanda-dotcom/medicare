import React, { useEffect, useState } from "react";
import "../css/Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

    // ✅ ADD DEFAULT QUANTITY
    const updatedCart = storedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1
    }));

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }, []);

  const removeFromCart = (id) => {
    const updatedCart = cart.filter(item => item.product_id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ INCREASE QUANTITY
  const increaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.product_id === id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  // ✅ DECREASE QUANTITY
  const decreaseQty = (id) => {
    const updatedCart = cart.map(item =>
      item.product_id === id
        ? {
            ...item,
            quantity: item.quantity > 1 ? item.quantity - 1 : 1
          }
        : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  // ✅ TOTAL WITH QUANTITY
  const getTotal = () => {
    return cart.reduce(
      (sum, item) =>
        sum + Number(item.product_cost) * item.quantity,
      0
    );
  };

  return (
    <div className="cart-page">

      <h2 className="cart-title">🛒 My Cart</h2>

      {cart.length === 0 ? (
        <div className="empty-cart">
          <p>Your cart is empty 😢</p>
          <button onClick={() => navigate("/products")}>
            Go Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="cart-grid">

            {cart.map(item => (
              <div className="cart-card" key={item.product_id}>

                <img
                  src={`https://yvonnesitanda.alwaysdata.net/static/images/${item.product_photo}`}
                  alt={item.product_name}
                />

                <div className="cart-info">
                  <h4>{item.product_name}</h4>

                  {/* ✅ PRICE */}
                  <p>
                    KES {Number(item.product_cost) * item.quantity}
                  </p>

                  {/* ✅ QUANTITY CONTROLS */}
                  <div className="qty-controls">
                    <button onClick={() => decreaseQty(item.product_id)}>
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button onClick={() => increaseQty(item.product_id)}>
                      +
                    </button>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    Remove
                  </button>
                </div>

              </div>
            ))}

          </div>

          {/* SUMMARY */}
          <div className="cart-summary">

            <h3>Order Summary</h3>

            <p>Total Items: {cart.length}</p>
            <p className="total">Total: KES {getTotal()}</p>

            <button
              className="checkout-btn"
              onClick={() => navigate("/makepayment", { state: { cart } })}
            >
              Checkout
            </button>

            <button className="clear-btn" onClick={clearCart}>
              Clear Cart
            </button>

          </div>
        </>
      )}

    </div>
  );
};

export default Cart;