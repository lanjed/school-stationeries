const Footer = () => {
  return (
    <footer className="bg-dark text-light mt-5">
      <div className="container py-4">
        <div className="row">

          {/* Brand / About */}
          <div className="col-md-4 mb-3">
            <h5>School Stationeries</h5>
            <p className="small">
              This is all about school stationeries and everything is there at an affordable price.Welcome all.
            </p>
          </div>

          {/* Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              
              <li><a href="/products" className="text-light text-decoration-none">Stationeries</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p className="small mb-1">Email: support@schoolstationeries.com</p>
            <p className="small mb-1">Phone: +123 456 789</p>
            <p className="small">Location: Westlands</p>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-secondary text-center py-2">
        <small>© {new Date().getFullYear()} SchoolStationeries. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer