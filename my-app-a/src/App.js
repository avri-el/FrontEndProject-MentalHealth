// import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import Article from "./components/Article";

const App = () => {
  return (
    <div>
      {/* <Spinner /> */}
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <Article />
      {/* Feature Start */}
      <Feature />
      {/* Feature Start */}
      {/* Team Start */}
      <Team />
      {/* Team End */}
      {/* Appointment Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <p className="d-inline-block border rounded-pill py-1 px-4">
                Appointment
              </p>
              <h1 className="mb-4">Make An Appointment To Visit Our Doctor</h1>
              <p className="mb-4">
                Taking the first step towards mental well-being is just a click
                away. Make an appointment to visit one of our experienced
                doctors today and begin your journey towards healing. Our
                compassionate team is here to listen, understand, and provide
                the support you need. Don’t wait—your mental health is
                important, and we’re here to help you every step of the way
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
      <Testimonial />
      {/* Testimonial End */}
      {/* Footer Start */}
      <Footer />
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
  );
};

export default App;
