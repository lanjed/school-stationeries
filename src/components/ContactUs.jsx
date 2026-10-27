import image4 from '../Images/phone call.jpg'
const ContactUs = () => {
    return(
        
            <div className="row mt-5 bg bg-primary">
                <div className="col-md-6 ">
                    <h2 className="text-dark mt-5">Contact Us</h2>
                    <form>
                        <input type="text" 
                        placeholder="Write your name"
                        className='form-control ml-5'/> <br /> <br />
                        <input type="email" 
                        placeholder="Enter your email"
                        className='form-control'/> <br /><br />
                        <input type="phone" 
                        placeholder="Enter your phone number"
                        className='form-control'/> <br /><br />

                        <textarea placeholder="Leave a comment" className='form-control'></textarea><br />

                        <button type='submit' className='btn btn-outline-dark  mb-5 text-light  w-50 '>send message</button>
                    </form>

                </div>
                <div className="col-md-6 ">
                    <h2 className='text-light mt-5'>You can call us also</h2>
                    <h4>The phone number is written on our contact page</h4>
                    <img src={image4} alt="" className='mb-5' />
                </div>
            </div>
        
    )
}
export default ContactUs