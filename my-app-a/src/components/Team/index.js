import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda


const Team = () => {
  const [nama_dokter, setnama_dokter] = useState({});

  const [spesialis, setspesialis] = useState({});


  useEffect(() => {
    const nama_dokterRef = ref(database, "nama_dokter/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(nama_dokterRef, (snapshot) => {
      const data = snapshot.val();
      setnama_dokter(data);
    });
    const spesialisRef = ref(database, "spesialis/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(spesialisRef, (snapshot) => {
      const data = snapshot.val();
      setspesialis(data);
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
            Doctors
          </p>
          <h1>Our Experience Doctors</h1>
        </div>
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-1.jpg" alt />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>{nama_dokter.nama1}</h5>
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
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-2.jpg" alt />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>{nama_dokter.nama2}</h5>
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
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-3.jpg" alt />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>{nama_dokter.nama3}</h5>
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
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src="img/team-4.jpg" alt />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>{nama_dokter.nama4}</h5>
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
  );
};

export default Team;
