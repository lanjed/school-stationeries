import  { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"

const AddStationeries = () => {
   // hooks to implement the inputs
  const[product_name, setProductName] = useState ("");
  const[product_description, setProductDescription] = useState ("");
  const[product_cost, setProductCost] = useState ("");
  const[product_photo, setProductPhoto] = useState ("");


  // feedback hooks
  const[loading, setLoading] = useState ("");
  const[error, setError] = useState ("");
  const[success, setSuccess] = useState ("");

  // navigattion hooks
  const navigate = useNavigate();


  // implementation of add product
  const submitForm = async(e) =>{
    // prevent values from clearing before submitting
    e.preventDefault();

    // loading message feedback
    setLoading("Please wait as we add your product...");
    
    try {
      // prepare data from hooks into formdata (key/value pairs)
      const data = new FormData();
      data.append("product_name", product_name);
      data.append("product_description", product_description);
      data.append("product_cost", product_cost);
      data.append("product_photo", product_photo);

      // post the formdata to api
      const response = await axios.post("https://jeddy.alwaysdata.net/api/add_product", data);

      setLoading("");
      setSuccess(response.data.success);

      // clear input controls
      setProductName("")
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");

      // navigation implementation
      setTimeout(() => {
        navigate("/");
      }, 1000)
      
    } catch (error) {
      setLoading('')
      setError(error.message);
      
    }

  }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 card shadow p-4'>
         <h1>Add Stationeries</h1>
        <form onSubmit={submitForm}>

          

          <p className='bg-warning text-dark rounded'>{loading}</p>
          <p className='bg-danger text-dark rounded'>{error}</p>
          <p className='bg-success text-dark rounded'>{success}</p>
          {/* product name */}
           
          <input type="text" 
          placeholder='Enter your stationery name here'
          className='form-control'
          value={product_name}
          onChange={(e) => setProductName(e.target.value)}
          required/>
          <br />
          {/* product description */}
         
          <textarea 
          placeholder='Enter your stationery description'
          className='form-control'
          value={product_description}
          onChange={(e) => setProductDescription(e.target.value)}
          required>
          
          </textarea>
          <br />
          {/* product cost */}
          
          <input type="number"
          placeholder='Enter your stationery cost'
          className='form-control'
          value={product_cost}
          onChange={(e) => setProductCost(e.target.value)}
          required />
          <br />

          {/* product photo */}
          <b>Browse / Upload product Image: </b>
          <input type="file" 
          accept='image/*'
          onChange={(e) => setProductPhoto(e.target.files[0])}
          className='form-control'
          required/>
          <br />

          {/* submit button */}
          <button type='submit' className='btn btn-info w-50'>
            Upload Stationeries
          </button>
        </form>

      </div>
    </div>
  )
}

export default AddStationeries