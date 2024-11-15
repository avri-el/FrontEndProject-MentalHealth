// import Spinner from "./components/Spinner";
import Topbar from "./components/Topbar";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Feature from "./components/Feature";
import Footer from "./components/Footer";
import About from "./components/About";
<<<<<<< HEAD
import Article from "./components/Article";
import Appointment from "./components/Appointment";
=======
import Appointment from "./components/Footer";
import Article from "./components/Footer";
>>>>>>> master

const App = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Header />
      <About />
      <Article />
      <Feature />
      <Team />
      <Appointment />
      <Testimonial />
      <Footer />
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
