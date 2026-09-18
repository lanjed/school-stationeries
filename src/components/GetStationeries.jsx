import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const GetStationeries = () => {
  // declare hooks
  const[stationeries, setStationeries] = useState ([]);

  // declare feedback hooks
  const[loading, setLoading] = useState ("");
  const[error, setError] = useState ("");

  // absolute url for products
  const img_url = "https://jeddy.alwaysdata.net/static/images/"

  // navigation hook
  const navigate = useNavigate();


  // implement get product function
  const GetProducts = async() =>{
    setLoading('Please wait, we are retrieving the products...')
    try {
      // attempt to retrieve products
      const response = await axios.get("https://jeddy.alwaysdata.net/api/get_product_details")
      setStationeries(response.data)
      setLoading("")
      
    } catch (error) {
      setLoading("");
      setError(error.message)
      
    }
  }

  // use useEffect to load products from the database/api
   useEffect(()=>{
    GetProducts()

   }, []
    
   )

  return (
    <div className='row'>
      <h2 className='mt-5 text-primary '><u>Available School Stationeries</u></h2>

      <p className='bg-warning text-light rounded'>{loading}</p>
      <p className='bg-danger text-light rounded'>{error}</p>


      {/* map every product to template and display */}
      {stationeries.map((product)=>(
      <div className='col-md-3 justify-content-center mb-4' key={product.product_id}>
        <div className='card shadow card-margin'>
           {/* image section */}
          <img 
          src={img_url + product.product_photo}
          alt={product.product_photo}
          className='product_img mt-4'/>
          <div className='card-body'>
            {/* product name */}
            <h4 className='mt-2 text-primary'>{product.product_name}</h4>
            {/* product description */}
            <p className='text-muted'>{product.product_description}</p>
            {/* product cost */}
            <b className='text-success'>ksh. {product.product_cost}</b><br />
            <button className='btn btn-outline-info mt-2 w-100'>Add to cart</button><br />
            <button className='btn btn-dark mt-2 w-100' onClick={()=>{navigate("/make-payment", {state:{product}})}}>Make payments</button>

          </div>
        </div>
      </div>
      ))}
    </div>
  )
}

export default GetStationeries