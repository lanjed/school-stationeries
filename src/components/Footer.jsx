const Footer = () => {
  return (
    <footer className="bg-info text-light">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-3 mb-3 text-dark">
            <h5>School Stationeries</h5>
            <p className="small">
              This is all about school stationeries and everything is there at an affordable price.Welcome all.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-3 text-dark">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-dark text-decoration-underline mb-2">Home</a></li>
              <li><a href="/" className="text-dark text-decoration-underline mb-2">Stationeries</a></li>

                          
              <li><a href="/contactus" className="text-dark text-decoration-underline mb-2">Contact Us</a></li>
              
              <li><a href="/aboutus" className="text-dark text-decoration-underline">About us</a></li>
              

            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-3 mb-3 text-dark">
            <h5>Get In Touch</h5>
            <p className="small mb-1">Email: support@schoolstationeries.com</p>
            <p className="small mb-1">Phone: +123 456 789</p>

          </div>

          {/* location */}
          <div className="col-md-3 mb-3 text-dark">
            <h5>Location</h5>
            <p className="small mb-1">We are located at the following places:</p>
            <p className="mb-1">1.Nairobi</p>
            <p className="mb-1">2.Kisumu</p>
            <p className="mb-1">3.Nakuru</p>
            <p className="mb-1">4.Eldoret</p>
          </div>
        

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-dark text-center py-2">
        <small>© {new Date().getFullYear()} SchoolStationeries. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer