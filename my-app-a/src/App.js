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
import Appointment from "./components/Appointment";

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
      <Appointment />
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
