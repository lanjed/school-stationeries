import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios"

const SignIn = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");

  // feedback hooks
  const[success, setSuccess] = useState("");
  const[loading, setLoading] = useState("");
  const[error, setError] = useState("");

  // navigation hook
  const navigate = useNavigate();

  // function to submit data to api for login
  const submitForm = async (e) =>{

    // prevent data from clearing before submission
    e.preventDefault();

    // progress message for user
    setLoading("Please wait as we log you in...")

    // the actual login implementation using exception handling
    try {
      const data = new FormData();
      data.append("email", email);
      data.append("password", password);
      
      // make a post request to api using axios
      const response =await axios.post("https://jeddy.alwaysdata.net/api/signin",data);

       // update feedback after response
      setLoading("");
      setSuccess(response.data.message);



      // check if user object is being returned
      if(response.data.user){
        // save user in local storage for later use
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        setTimeout(()=>{
          navigate("/");

        },1000
        )
        
      }else{
        setSuccess('Could not login to account. try again');
      }

      // clear hooks/state variables from input fields
      setEmail("");
      setPassword("");
      
    } catch (error) {
      setLoading("");
      setError(error.message)
      
    }

  }
  return (
    <div className='row justify-content-center mt-5'>
      <div className='col-md-6 card shadow p-4'>
        <h2>Sign In</h2>
        <form onSubmit={submitForm}>

          <p className='bg-warning text-light rounded'>{loading}</p>
          <p className='bg-success text-light rounded'>{success}</p>
          <p className='bg-danger text-light rounded'>{error}</p>

          {/* email field */}
          <input 
          type="text"
          className='form-control' 
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required/>
          <br />
          {/* password field */}
          <input 
          type="password" 
          className='form-control'
          placeholder='Enter your password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required/>
          <br />

          <button type='submit' className='btn btn-info w-50'>Sign In</button>

          <p>Don't have an account? <Link to="/signup">SignUp</Link></p>
        </form>
        
      </div>
    </div>
  )
}

export default SignIn