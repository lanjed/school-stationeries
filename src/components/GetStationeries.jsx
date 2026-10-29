import  { useEffect, useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';


const GetStationeries = () => {
  // declare hooks
  const[stationeries, setStationeries] = useState ([]);
  const [searchQuery, setSearchQuery] = useState("");

  // declare feedback hooks
  const[loading, setLoading] = useState ("");
  const[error, setError] = useState ("");

  // absolute url for products
  const img_url = "https://jeddy.alwaysdata.net/static/images/"

  // navigation hook
  const navigate = useNavigate();

  const { addToCart } = useCart(); // Add to cart function


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

  const filteredStationeries = stationeries.filter(
    (product) =>
      product.product_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.product_description
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
  );

  // use useEffect to load products from the database/api
   useEffect(()=>{
    GetProducts()

   }, []
    
   )

  return (
    <div className='row bg bg-secondary mt-5 mb-5'>
      <h2 className='mt-5 text-white '><u>Available School Stationeries</u></h2>

      <p className='bg-warning text-light rounded'>{loading}</p>
      <p className='bg-danger text-light rounded'>{error}</p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        className="form-control my-3 w-50 mx-auto"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />


      {/* Display Products */}
      <div className="row">
        {filteredStationeries.length > 0 ? (
          filteredStationeries.map((product) => (
            <div key={product.id} className="col-md-3 mb-4 ">
              <div className="card shadow bg-light text-center p-3 ">
                <img
                  src={img_url + product.product_photo}
                  className="product_img mt-2"
                  alt={product.product_name}
                  style={{ width: "100%", height: "200px", objectFit: "" }}
                />
                <div className="card-body">
                  <h5 className="text-primary"><b>{product.product_name}</b></h5>
                  <p className="text-dark">
                    {product.product_description}
                  </p>
                  <b className="text-success"><b>Ksh. {product.product_cost}</b></b>
                  <div className="mt-2 d-flex flex-column gap-2">
                    
                    <button
                      className="btn btn-outline-dark "
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <button
                      className="btn btn-info"
                      onClick={() =>
                        navigate("/make-payment", { state: { product } })
                      }
                    >
                      Make Payment
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-light">No products found.</p>
        )}
      </div>
    </div>

)}
    
  

export default GetStationeries