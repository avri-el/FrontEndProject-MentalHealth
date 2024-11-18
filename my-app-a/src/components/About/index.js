import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda

const About = () => {
  const [About, setAbout] = useState({});

  useEffect(() => {
    const AboutRef = ref(database, "About/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(AboutRef, (snapshot) => {
      const data = snapshot.val();
      setAbout(data);
    });
  }, []);
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
            <h1 className="mb-4">{About.title}</h1>
            <p>{About.paragraph1}</p>
            <p className="mb-4">{About.paragraph2}</p>
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
