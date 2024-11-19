import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";
import { useSpring, animated } from "@react-spring/web";

const Header = () => {
  const [header, setHeader] = useState({});
  const [loaded, setLoaded] = useState(false);

  const fadeIn = useSpring({
    opacity: loaded ? 1 : 0,
    transform: loaded ? "translateY(0)" : "translateY(-30px)",
    config: { tension: 180, friction: 20 },
  });

  useEffect(() => {
    const headerRef = ref(database, "header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      setHeader(data);
    });
  }, []);

  // Handle gambar yang sudah dimuat
  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="container-fluid header bg-primary p-0 mb-5">
      <div className="row g-0 align-items-center flex-column-reverse flex-lg-row">
        <div className="col-lg-6 p-5">
          <animated.h1
            className="display-4 text-white mb-5"
            style={fadeIn} // Apply fadeIn animation
          >
            {header.title}
          </animated.h1>
        </div>
        <div className="col-lg-6">
          <div className="owl-carousel header-carousel">
            <div className="owl-carousel-item position-relative">
              <animated.img
                className="img-fluid"
                src={`data:image/jpeg;base64, ${header.img}`}
                alt="Header Image"
                style={fadeIn} // Apply fadeIn animation
                onLoad={handleImageLoad} // Trigger animation when image is loaded
              />
              <div className="owl-carousel-text">
                <animated.h1
                  className="display-1 text-white mb-0"
                  style={fadeIn} // Apply fadeIn animation
                >
                  {header.h1img}
                </animated.h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
