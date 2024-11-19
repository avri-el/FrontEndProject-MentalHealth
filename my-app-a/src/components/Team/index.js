import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda

const Team = () => {
  const [nama_dokter, setNamaDokter] = useState({});
  const [teamImage, setTeamImage] = useState({}); // Untuk gambar

  useEffect(() => {
    const nama_dokterRef = ref(database, "nama_dokter/");
    onValue(nama_dokterRef, (snapshot) => {
      const data = snapshot.val();
      setNamaDokter(data);
    });

    const teamImageRef = ref(database, "teamImage/");
    onValue(teamImageRef, (snapshot) => {
      const data = snapshot.val();
      setTeamImage(data);
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
          <h1>Our Experienced Doctors</h1>
        </div>
        <div className="row g-4">
          {/* Doctor 1 */}
          {nama_dokter.nama1 && teamImage.team1 && (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src={`data:image/jpeg;base64, ${teamImage.team1}`}
                    alt="Doctor 1"
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>{nama_dokter.nama1}</h5>
                  <p className="text-primary">Clinical Psychology</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Doctor 2 */}
          {nama_dokter.nama2 && (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/team-2.jpg"
                    alt="Doctor 2"
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>{nama_dokter.nama2}</h5>
                  <p className="text-primary">Developmental Psychology</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Doctor 3 */}
          {nama_dokter.nama3 && (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/team-3.jpg"
                    alt="Doctor 3"
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>{nama_dokter.nama3}</h5>
                  <p className="text-primary">Counseling Psychology</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Doctor 4 */}
          {nama_dokter.nama4 && (
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.7s"
            >
              <div className="team-item position-relative rounded overflow-hidden">
                <div className="overflow-hidden">
                  <img
                    className="img-fluid"
                    src="img/team-4.jpg"
                    alt="Doctor 4"
                  />
                </div>
                <div className="team-text bg-light text-center p-4">
                  <h5>{nama_dokter.nama4}</h5>
                  <p className="text-primary">Health Psychology</p>
                  <div className="team-social text-center">
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a className="btn btn-square" href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Team;
