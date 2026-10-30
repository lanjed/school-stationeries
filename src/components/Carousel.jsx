import image1 from '../Images/carousel 20.webp'
import image2 from '../Images/carousel 10.jpeg'
import image3 from '../Images/carousel 19.jpg'

const Carousel = () => {
  return (
    
    <div id="carouselExample" className="carousel slide row justify-content-center mt-5" data-bs-ride="carousel">
      
      {/* Indicators */}
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
        <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={image1} className="d-block  carousel" height="700px" alt="slide 1" />
        </div>
        <div className="carousel-item">
          <img src={image2} className="d-block  carousel" height="700px"  alt="slide 2" />
        </div>
        <div className="carousel-item">
          <img src={image3} className="d-block  carousel" height="700px"  alt="slide 3" />
        </div>
      </div>

      {/* Controls */}
      <button className="carousel-control-prev " type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon bg-danger"></span>
      </button>

      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon bg-danger"></span>
      </button>

    </div>
  )
}

export default Carousel;