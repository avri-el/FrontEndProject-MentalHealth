const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <img
                className="img-fluid rounded w-75 align-self-end"
                src="img/about-1.jpg"
                alt=""
              />
              <img
                className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                src="img/about-2.jpg"
                alt=""
                style={{ marginTop: "-25%" }}
              />
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
            <p className="d-inline-block border rounded-pill py-1 px-4">
              About Us
            </p>
            <h1 className="mb-4">
              Why You Should Trust Us? Get Know About Us!
            </h1>
            <p>
              We are dedicated to providing you with reliable, professional, and
              compassionate support for your mental well-being. Our platform
              connects you with qualified mental health experts, offering a wide
              range of resources such as articles, video content, self-care
              tips, and personal success stories.
            </p>
            <p className="mb-4">
              Whether you're dealing with stress, anxiety, or simply looking to
              improve your mental well-being, we're here to support you every
              step of the way. Our team of experienced professionals offers
              guidance, coping strategies, and resources tailored to your needs,
              helping you to take control of your mental health and lead a more
              fulfilling life.
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Quality health care
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Only Qualified Doctors
            </p>
            <p>
              <i className="far fa-check-circle text-primary me-3" />
              Medical Research Professionals
            </p>
            <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href="#">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
