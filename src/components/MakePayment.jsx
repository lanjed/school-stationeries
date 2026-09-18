import  { useState } from 'react'
import axios from "axios"
import { useLocation } from 'react-router-dom';


const MakePayment = () => {

  const {product} = useLocation().state || {};
  // absolute url for the images
  const img_url = "https://jeddy.alwaysdata.net/static/images/"

  // initialize hooks for the form
  const[phone, setPhone] = useState("")
  // feedback hooks
  const[success, setSuccess] = useState("")
  const[error, setError] = useState("")
  const[loading, setLoading] = useState("")

  // create a submit form  function to pay for products
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
  return (
    <div className='row justify-content-center mt-4'>
      <h1>Make Payments - Lipa Na MPESA</h1>
      <div className='col-md-3 card shadow card-margin p-5'>

        <img 
        src={img_url + product.product_photo} 
        alt={product.product_photo} 
        className='product_img rounded'/>
        {/* product name */}
        <h4 className='text-info text-start'>{product.product_name}</h4>
        {/* product description */}
        <p className='text-start'>{product.product_description}</p>
        {/* product cost */}
        <b className='text-warning text-start'>ksh. {product.product_cost}</b>

        {/* mpesa number input form */}
        <form onSubmit={submitForm}>
          {loading}
          {error}
          {success}
          {/* phone number */}
          <input 
          type="tel" 
          placeholder='Enter Phone (2547xxxxxxxx)'
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}/>
          <br />

          {/* submit button */}
          <button className='btn btn-success w-100'>
            Make payment
          </button>
        </form>

      </div>
    </div>
  )
}

export default MakePayment