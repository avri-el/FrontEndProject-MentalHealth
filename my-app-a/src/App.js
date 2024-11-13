const App = () => {
  return (
    <div>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div
          className="spinner-grow text-primary"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}
      {/* Topbar Start */}
      <div
        className="container-fluid bg-light p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-map-marker-alt text-primary me-2" />
              <small>
                Jl. Sudirman No. 45, Jakarta Selatan, 12930, Indonesia
              </small>
            </div>
            <div className="h-100 d-inline-flex align-items-center py-3">
              <small className="far fa-clock text-primary me-2" />
              <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
            </div>
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
              <small className="fa fa-phone-alt text-primary me-2" />
              <small>+62 345 6789</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center">
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-1"
                href
              >
                <i className="fab fa-linkedin-in" />
              </a>
              <a
                className="btn btn-sm-square rounded-circle bg-white text-primary me-0"
                href
              >
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <nav
        className="navbar navbar-expand-lg bg-white navbar-light sticky-top p-0 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <a
          href="index.html"
          className="navbar-brand d-flex align-items-center px-4 px-lg-5"
        >
          <h1 className="m-0 text-primary">
            <i className="far fa-hospital me-3" />
            MHC
          </h1>
        </a>
        <button
          type="button"
          className="navbar-toggler me-4"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <a
            href
            className="btn btn-primary rounded-0 py-4 px-lg-5 d-none d-lg-block"
          >
            Appointment
            <i className="fa fa-arrow-right ms-3" />
          </a>
        </div>
      </nav>
      {/* Navbar End */}
      {/* Header Start */}
      <div className="container-fluid header bg-primary p-0 mb-5">
        <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
            <h1 className="display-4 text-white mb-5">
              Caring for your mind is the first step toward a brighter,
              healthier you.
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
      {/* Header End */}
      {/* About Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div className="d-flex flex-column">
                <img
                  className="img-fluid rounded w-75 align-self-end"
                  src="img/about-1.jpg"
                  alt
                />
                <img
                  className="img-fluid rounded w-50 bg-white pt-3 pe-3"
                  src="img/about-2.jpg"
                  alt
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
                We are dedicated to providing you with reliable, professional,
                professional, and compassionate support for your mental well-
                being. Our platform connects you with qualified mental health
                experts, offering a wide range of resources such as articles,
                video content, self-care tips, and personal success stories.
              </p>
              <p className="mb-4">
                Whether you're dealing with stress, anxiety, or simply looking
                to improve your mental well-being, we're here to support you
                every step of the way. Our team of experienced professionals
                offers guidance, coping strategies, and resources tailored to
                your needs, helping you to take control of your mental health
                and lead a more fulfilling life.
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
              <a className="btn btn-primary rounded-pill py-3 px-5 mt-3" href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}
      {/* Article Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 600 }}
          >
            <p className="d-inline-block border rounded-pill py-1 px-4">
              Services
            </p>
            <h1>Health Care Solutions</h1>
          </div>
          <div className="row g-4">
            {/* Self-Care & Stress Management */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-smile text-primary fs-4" />
                </div>
                <h4 className="mb-3">Self-Care &amp; Stress Management</h4>
                <p className="mb-4">
                  <a
                    href="https://mentalhealthyfit.org/thinky/2024/4/8/identifying-and-managing-stress?gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjGNT56prgisSuaoY5hwcV7sDFnob0Rxz6x_SJzPuf_9Z1FT_wgFngBoCHtcQAvD_BwE"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tips For Stress Identification and Management (Article){" "}
                  </a>
                  <br />
                  Tips and techniques to help you manage stress and maintain
                  your mental well-being. Learn how to cope with everyday
                  challenges and prioritize self-care.
                </p>
                <a className="btn" href>
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            {/* Visual & Audio Content */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-play-circle text-primary fs-4" />
                </div>
                <h4 className="mb-3">Visual &amp; Audio Content</h4>
                <p className="mb-4">
                  <a
                    href="https://www.youtube.com/watch?v=dBn0ETS6XDk"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Self Care: What It Really Is (YouTube){" "}
                  </a>
                  <br />
                  Access engaging videos and audio content from platforms like
                  YouTube to explore various health topics. Learn in a fun and
                  interactive way.
                </p>
                <a className="btn" href>
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
            {/* Articles on Mental Health Topics */}
            <div
              className="col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="service-item bg-light rounded h-100 p-5">
                <div
                  className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                  style={{ width: 65, height: 65 }}
                >
                  <i className="fa fa-newspaper text-primary fs-4" />
                </div>
                <h4 className="mb-3">Mental Health Articles</h4>
                <a
                  href="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Importance of Mental Health Awareness (Article){" "}
                </a>
                <br />
                <p className="mb-4">
                  Explore articles covering a range of mental health topics,
                  from understanding mental health issues to learning positive
                  coping strategies. Get the knowledge and support you need.
                </p>
                <a className="btn" href>
                  <i className="fa fa-plus text-primary me-3" />
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Article End */}
      {/* Feature Start */}
      <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
          <div className="row g-0 mx-lg-0">
            <div
              className="col-lg-6 feature-text py-5 wow fadeIn"
              data-wow-delay="0.1s"
            >
              <div className="p-lg-5 ps-lg-0">
                <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                  Programs
                </p>
                <h1 className="text-white mb-4">
                  Mental Health Programs and Support
                </h1>
                <p className="text-white mb-4 pb-2">
                  We offer a variety of mental health programs, support groups,
                  and workshops that you can join to receive support and improve
                  your mental well-being. Join us for a positive and enriching
                  experience.
                </p>
                <div className="row g-4">
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-user-md text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Experience</p>
                        <h5 className="text-white mb-0">Doctors</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-users text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Community</p>
                        <h5 className="text-white mb-0">Support Group</h5>
                        <i className="fa fa-check text-primary" />
                      </div>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="d-flex align-items-center">
                      <div
                        className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                        style={{ width: 55, height: 55 }}
                      >
                        <i className="fa fa-brain text-primary" />
                      </div>
                      <div className="ms-4">
                        <p className="text-white mb-2">Development</p>
                        <h5 className="text-white mb-0">Workshop</h5>
                        <i className="fa fa-comment-medical text-primary" />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="d-flex align-items-center">
                        <div
                          className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                          style={{ width: 55, height: 55 }}
                        >
                          <i className="fa fa-calendar-alt text-primary" />
                        </div>
                        <div className="ms-4">
                          <p className="text-white mb-2">Schedule</p>
                          <h5 className="text-white mb-0">Programs</h5>
                          <i className="fa fa-headphones text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-6 pe-lg-0 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: 400 }}
              >
                <div className="position-relative h-100">
                  <img
                    className="position-absolute img-fluid w-100 h-100"
                    src="pexels-jopwell-2422290.jpg"
                    style={{ objectFit: "cover" }}
                    alt="Mental Health Programs"
                  />
                  &gt;&gt;&gt;&gt;&gt;&gt;
                  4b290465281cddef9465427ab332d06465d97247 /&gt;
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Feature End */}
        {/* Team Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Doctors
              </p>
              <h1>Our Experience Doctors</h1>
            </div>
            <div className="row g-4">
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.1s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-1.jpg" alt />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Dr. Praysi Leony, M.Psi</h5>
                    <p className="text-primary">Clinical Psychology</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-2.jpg" alt />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Dr. Dave Gevariel, M.Psi</h5>
                    <p className="text-primary">Developmental Psychology</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.5s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-3.jpg" alt />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Dr. Tzuyu Chou, M.Psi</h5>
                    <p className="text-primary">Counseling Psychology</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-3 col-md-6 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                <div className="team-item position-relative rounded overflow-hidden">
                  <div className="overflow-hidden">
                    <img className="img-fluid" src="img/team-4.jpg" alt />
                  </div>
                  <div className="team-text bg-light text-center p-4">
                    <h5>Dr. Levin Raven, M.Psi</h5>
                    <p className="text-primary">Health Psychology</p>
                    <div className="team-social text-center">
                      <a className="btn btn-square" href>
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-square" href>
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
        {/* Appointment Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="d-inline-block border rounded-pill py-1 px-4">
                  Appointment
                </p>
                <h1 className="mb-4">
                  Make An Appointment To Visit Our Doctor
                </h1>
                <p className="mb-4">
                  Taking the first step towards mental well-being is just a
                  click away. Make an appointment to visit one of our
                  experienced doctors today and begin your journey towards
                  healing. Our compassionate team is here to listen, understand,
                  and provide the support you need. Don’t wait—your mental
                  health is important, and we’re here to help you every step of
                  the way
                </p>
                <div className="bg-light rounded d-flex align-items-center p-5 mb-4">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-phone-alt text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Call Us Now</p>
                    <h5 className="mb-0">+62 345 6789</h5>
                  </div>
                </div>
                <div className="bg-light rounded d-flex align-items-center p-5">
                  <div
                    className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-white"
                    style={{ width: 55, height: 55 }}
                  >
                    <i className="fa fa-envelope-open text-primary" />
                  </div>
                  <div className="ms-4">
                    <p className="mb-2">Mail Us Now</p>
                    <h5 className="mb-0">mentalhealth@gmail.com</h5>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="bg-light rounded h-100 d-flex align-items-center p-5">
                  <form>
                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Name"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="email"
                          className="form-control border-0"
                          placeholder="Your Email"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <input
                          type="text"
                          className="form-control border-0"
                          placeholder="Your Mobile"
                          style={{ height: 55 }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <select
                          className="form-select border-0"
                          style={{ height: 55 }}
                        >
                          <option selected>Choose Doctor</option>
                          <option value={1}>Doctor 1</option>
                          <option value={2}>Doctor 2</option>
                          <option value={3}>Doctor 3</option>
                        </select>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="date"
                          id="date"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control border-0 datetimepicker-input"
                            placeholder="Choose Date"
                            data-target="#date"
                            data-toggle="datetimepicker"
                            style={{ height: 55 }}
                          />
                        </div>
                      </div>
                      <div className="col-12 col-sm-6">
                        <div
                          className="time"
                          id="time"
                          data-target-input="nearest"
                        >
                          <input
                            type="text"
                            className="form-control border-0 datetimepicker-input"
                            placeholder="Choose Date"
                            data-target="#time"
                            data-toggle="datetimepicker"
                            style={{ height: 55 }}
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <textarea
                          className="form-control border-0"
                          rows={5}
                          placeholder="Describe your problem"
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-12">
                        <button
                          className="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Book Appointment
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Appointment End */}
        {/* Testimonial Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto mb-5 wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 600 }}
            >
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Testimonial
              </p>
              <h1>What Say Our Patients!</h1>
            </div>
            <div
              className="owl-carousel testimonial-carousel wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-1.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    I've been dealing with a lot of stress and this platform has
                    been a game-changer for me. The consultants are so easy to
                    talk to, and the articles and videos really helped me
                    understand what I'm going through. I feel much more in
                    control of my mental health now and have the tools I need to
                    handle things better. I'm really grateful for all the
                    support.
                  </p>
                  <h5 className="mb-1">Izabelle Margarette</h5>
                  <span className="fst-italic">Accountant</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-2.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    For the longest time, I've been battling anxiety, and it
                    felt like no one understood. I decided to give this website
                    a shot, and it's been a total turning point for me. The
                    resources here, from the expert advice to the helpful
                    articles, have given me a better understanding of what I'm
                    going through. I now feel more confident and equipped to
                    handle things, and I'm so glad I found this platform.
                  </p>
                  <h5 className="mb-1">James Kavinsky</h5>
                  <span className="fst-italic">Videographer</span>
                </div>
              </div>
              <div className="testimonial-item text-center">
                <img
                  className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                  src="img/testimonial-3.jpg"
                  style={{ width: 100, height: 100 }}
                />
                <div className="testimonial-text rounded text-center p-4">
                  <p>
                    I've never been one to talk openly about my mental health,
                    but I was really at a breaking point. This website made it
                    so much easier to find the help I needed. The consultants
                    were understanding and gave me practical tips that I could
                    actually apply in my everyday life. The videos and stories
                    on the site also gave me hope that I wasn't alone in what I
                    was going through. I feel like I'm on the right path now.
                  </p>
                  <h5 className="mb-1">Jonathan Rodriges</h5>
                  <span className="fst-italic">Technician</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonial End */}
        {/* Footer Start */}
        <div
          className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
          data-wow-delay="0.1s"
        >
          <div className="container py-5">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6">
                <p className="mb-2">
                  <i className="fa fa-map-marker-alt me-3" />
                  Jl. Sudirman No. 45, Jakarta Selatan, 12930, Indonesia
                </p>
                <p className="mb-2">
                  <i className="fa fa-phone-alt me-3" />
                  +62 345 67890
                </p>
                <p className="mb-2">
                  <i className="fa fa-envelope me-3" />
                  mentalhealth@example.com
                </p>
                <div className="d-flex pt-2">
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-twitter" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-youtube" />
                  </a>
                  <a
                    className="btn btn-outline-light btn-social rounded-circle"
                    href
                  >
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Quick Links</h5>
                <a className="btn btn-link" href>
                  About Us
                </a>
                <a className="btn btn-link" href>
                  Contact Us
                </a>
                <a className="btn btn-link" href>
                  Our Services
                </a>
                <a className="btn btn-link" href>
                  Terms &amp; Condition
                </a>
                <a className="btn btn-link" href>
                  Support
                </a>
              </div>
              <div className="col-lg-3 col-md-6">
                <h5 className="text-light mb-4">Newsletter</h5>
                <p>
                  Subscribe to our newsletter for the latest updates and tips on
                  mental well-being.
                </p>
                <div
                  className="position-relative mx-auto"
                  style={{ maxWidth: 400 }}
                >
                  <input
                    className="form-control border-0 w-100 py-3 ps-4 pe-5"
                    type="text"
                    placeholder="Your email"
                  />
                  <button
                    type="button"
                    className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                  >
                    SignUp
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  ©
                  <a className="border-bottom" href="#">
                    Mental Health Consultant
                  </a>
                  , All Right Reserved.
                </div>
                <div className="col-md-6 text-center text-md-end">
                  Designed By
                  <a className="border-bottom" href="https://htmlcodex.com">
                    HTML Codex
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Footer End */}
        {/* Back to Top */}
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
        {/* JavaScript Libraries */}
        {/* Template Javascript */}
      </div>
    </div>
  );
};

export default App;
