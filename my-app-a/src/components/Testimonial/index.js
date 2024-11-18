import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda

const Testimonial = () => {
  const [Testimoni, setTestimoni] = useState({});

  useEffect(() => {
    const TestimoniRef = ref(database, "Testimoni/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(TestimoniRef, (snapshot) => {
      const data = snapshot.val();
      setTestimoni(data);
    });

  }, []);

  return (
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
              <p>{Testimoni.user1}</p>
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
              <p>{Testimoni.user2}</p>
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
              <p>{Testimoni.user3}</p>
              <h5 className="mb-1">Jonathan Rodriges</h5>
              <span className="fst-italic">Technician</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
