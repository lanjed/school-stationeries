import  { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const SignUp = () => {

   // create hooks to hold user registration details
    const [username, setUsername] = useState ("");
    const [email, setEmail] = useState ("");
    const [password, setPassword] = useState ("");
    const [phone, setPhone] = useState ("");

    // feedback hooks
    const[loading, setLoading] = useState ("");
    const [error, setError] = useState ("");
    const [success, setSuccess] = useState ("");



    // create the submit function
    const submitForm = async (e) =>{
        // prevent values from disappearing before submitting to the database
        e.preventDefault();
        // update the loading state with a message
        setLoading("Please wait as we upload your data");

        try {
            // put updated hooks/state-variables in form data
            const data = new FormData();
            data.append("username", username);
            data.append("email", email);
            data.append("password", password);
            data.append("phone", phone);

            // make a post request to the backend api
            const response = await axios.post("https://jeddy.alwaysdata.net/api/signup", data);
            setLoading("");
            setSuccess(response.data.success);

            // clear form inputs/fields
            setUsername("");
            setEmail("");
            setPassword("");
            setPhone("");
        } catch (error) {
            setLoading("")
            setError(error.message)
            
        }

    }
  return (
    <div className='row justify-content-center mt-4'>
      <div className='col-md-6 card shadow p-5'>
        <h2>Sign Up</h2>
        <form onSubmit={submitForm}>
          <p className="bg-warning text-light rounded">{loading}</p>
          <p className="bg-danger text-light rounded">{error}</p>
          <p className="bg-success text-light rounded">{success}</p>
          {/* username */}
          <input 
          type="text"
          className='form-control'
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
          placeholder='Enter your username'
          required/>
          <br />
          {/* email */}
          <input type="email" 
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)} 
          placeholder='Enter your email' 
          required/>
          <br />
          {/* password */}
          <input type="password"
          className='form-control' 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
          placeholder='Enter your password'
          required/>
          <br />
          {/* phone */}
          <input type="tel"
          className='form-control'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}  
          placeholder='Enter your phone number'
          required/>
          <br />

          {/* button to press for the next page */}
          <button type='submit'
          className='btn btn-info w-50'>Sign Up</button>

          <p>Already have an account? <Link to="/signin">SignIn</Link></p>
        </form>
        
      
      </div>
    </div>
  )
}

export default SignUp