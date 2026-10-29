import React, { useState } from "react";
import { useCart } from "../components/CartContext";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Cart = () => {
  const {product} = useLocation().state || {};
  const {
    cartItems,
    removeFromCart,
    increaseQty,
    decreaseQty,
    clearCart,
    getTotalPrice,
  } = useCart();

  // initialize hooks for the form
  const[phone, setPhone] = useState("")

  // feedback hooks
  const[success, setSuccess] = useState("")
  const[error, setError] = useState("")
  const[loading, setLoading] = useState("")

  const submitForm = async (e) =>{
    e.preventDefault();
    // loading feedback for user
    setLoading("Please wait as we process your payment");
    try {
      // prepare dat to make payments
      const data = new FormData();
      data.append("phone", phone);
      data.append("amount", product.product_cost);

      // post data to api to complete the payment
      const response = await axios.post("https://jeddy.alwaysdata.net/api/mpesa_payment", data)
      
      setLoading("")
      setSuccess(response.data.message)
      
    } catch (error) {
      setLoading("")
      setError(error.message);
      
    }
  }

  const navigate = useNavigate();

  return (
    <div className="container mt-4 mb-4 text-light bg bg-primary">
      <h2><b>Your Cart</b></h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>No items in cart.</p>
          <button
            className="btn btn-info mb-4"
            onClick={() => navigate("/")}
          >
            Start Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="row">
            {cartItems.map((item) => (
              <div key={item.product_id} className="col-md-4 mb-4">
                <div className="card bg-secondary text-white p-3">
                  <img
                    src={`https://jeddy.alwaysdata.net/static/images/${item.product_photo}`}
                    alt={item.product_name}
                    style={{
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                  <h5>{item.product_name}</h5>
                  <p>{item.product_description.slice(0, 50)}...</p>
                  <b>Ksh. {item.product_cost}</b>
                  <div className="mt-2">
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => decreaseQty(item.product_id)}
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      className="btn btn-secondary btn-sm"
                      onClick={() => increaseQty(item.product_id)}
                    >
                      +
                    </button>
                  </div>
                  <p className="mt-2">
                    Subtotal:{" "}
                    <b className="text-dark">
                      Ksh. {item.product_cost * item.quantity}
                    </b>
                  </p>
                  <button
                    className="btn btn-danger mt-2"
                    onClick={() => removeFromCart(item.product_id)}
                  >
                    Remove
                  </button>
                  <button
                    className="btn btn-info mt-2 ms-2"
                    onClick={() =>
                      navigate("/make-payment", { state: { product: item } })
                    }
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <h4 className="mt-3 text-white">
            Total Price: Ksh. {getTotalPrice()}
          </h4>

          <form onSubmit={submitForm}>
            {error}
            {success}
            {loading}
            <input type="tel" 
            placeholder="Enter phone (2547xxxxxxxx)"
            className='form-control w-50 p-10'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}/>
          </form>
          <br />

          <button
          className="btn btn-dark mt-2 "
          >
            Pay Total
          </button><br />

          <button className="btn btn-info mt-2 mb-3 " onClick={clearCart}>
            Clear Cart
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;