import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
import Appointment from "./components/Footer";
import Article from "./components/Footer";


const App = () => {
  return (
    <div>
      <Spinner />
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <Appointment />
      <Article />


    

        {/* About Start */}
        {/* About End */}
        {/* Article Start */}
        {/* Article End */}
        {/* Feature Start */}
        <Feature />
        {/* Feature Start */}
        {/* Team Start */}
        <Team />
        {/* Team End */}
        {/* Appointment Start */}
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
    </div>
  );
};

export default App;
