const Header = () => {
  return (
    <div className="container-fluid header bg-primary p-0 mb-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-4 text-white mb-5">
            Caring for your mind is the first step toward a brighter, healthier
            you.
          </h1>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-1.jpg" alt />
              <div className="owl-carousel-text">
                <h1 className="display-1 text-white mb-0">Balance</h1>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-2.jpg" alt />
              <div className="owl-carousel-text">
                <h1 className="display-1 text-white mb-0">Calm</h1>
              </div>
            </div>
            <div className="owl-carousel-item position-relative">
              <img className="img-fluid" src="img/carousel-3.jpg" alt />
              <div className="owl-carousel-text">
                <h1 className="display-1 text-white mb-0">Support</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
