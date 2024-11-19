import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase"; // Sesuaikan jalur impor dengan struktur folder Anda

const Header = () => {
  const [header, setHeader] = useState({});

  useEffect(() => {
    const headerRef = ref(database, "header/"); // Gunakan instance database yang sudah diinisialisasi
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  return (
    <div className="container-fluid header bg-primary p-0 mb-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-5 wow fadeIn" data-wow-delay="0.1s">
          <h1 className="display-4 text-white mb-5">{header.title}</h1>
        </div>
        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item position-relative">
              <img
                className="img-fluid"
                src={`data:image/jpeg;base64, ${header.img}`}
                alt
              />
              <div className="owl-carousel-text">
                <h1 className="display-1 text-white mb-0">{header.h1img}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
