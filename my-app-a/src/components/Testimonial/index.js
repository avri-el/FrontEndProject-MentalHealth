import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Testimonial = () => {
  const [Testimoni, setTestimoni] = useState({});
  const [namaTesti, setnamaTesti] = useState({});

  useEffect(() => {
    const TestimoniRef = ref(database, "Testimoni/");
    onValue(TestimoniRef, (snapshot) => {
      const data = snapshot.val();
      setTestimoni(data);
    });
    const namaTestiRef = ref(database, "namaTesti/");
    onValue(namaTestiRef, (snapshot) => {
      const data = snapshot.val();
      setnamaTesti(data);
    });
  }, []);

  return (
    <Fade>
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
                src={`data:image/jpeg;base64, ${Testimoni.img1}`}
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>{Testimoni.user1}</p>
                <h5 className="mb-1">{namaTesti.person1}</h5>
                <span className="fst-italic">Accountant</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src={`data:image/jpeg;base64, ${Testimoni.img2}`}
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>{Testimoni.user2}</p>
                <h5 className="mb-1">{namaTesti.person2}</h5>
                <span className="fst-italic">Videographer</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src={`data:image/jpeg;base64, ${Testimoni.img3}`}
                style={{ width: 100, height: 100 }}
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>{Testimoni.user3}</p>
                <h5 className="mb-1">{namaTesti.person3}</h5>
                <span className="fst-italic">Technician</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Testimonial;
