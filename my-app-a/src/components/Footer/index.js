import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Footer = () => {
  const [footer, setFooter] = useState({});
  const [logo, setLogo] = useState({});

  useEffect(() => {
    const footerRef = ref(database, "footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      setFooter(data);
    });
    const logoRef = ref(database, "logo/");
    onValue(logoRef, (snapshot) => {
      const data = snapshot.val();
      setLogo(data);
    });
  }, []);

  return (
    <div
      className="container-fluid bg-dark text-light footer mt-5 pt-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <p className="mb-2">
              <i className="fa fa-map-marker-alt me-3" />
              {footer.address}
            </p>
            <p className="mb-2">
              <i className="fa fa-phone-alt me-3" />
              {footer.phone}
            </p>
            <p className="mb-2">
              <i className="fa fa-envelope me-3" />
              {footer.email}
            </p>
            <div className="d-flex pt-2">
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <img
                  src={`data:image/jpeg;base64, ${logo.twt}`}
                  alt="Twitter"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <img
                  src={`data:image/jpeg;base64, ${logo.fb}`}
                  alt="Facebook"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <img
                  src={`data:image/jpeg;base64, ${logo.youtube}`}
                  alt="YouTube"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </a>
              <a
                className="btn btn-outline-light btn-social rounded-circle"
                href
              >
                <img
                  src={`data:image/jpeg;base64, ${logo.linkedin}`}
                  alt="LinkedIn"
                  style={{
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                  }}
                />
              </a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Quick Links</h5>
            <a className="btn btn-link" href>
              About Us
            </a>
            <a className="btn btn-link" href>
              Contact Us
            </a>
            <a className="btn btn-link" href>
              Our Services
            </a>
            <a className="btn btn-link" href>
              Terms &amp; Condition
            </a>
            <a className="btn btn-link" href>
              Support
            </a>
          </div>
          <div className="col-lg-3 col-md-6">
            <h5 className="text-light mb-4">Newsletter</h5>
            <p>{footer.subs_newsletter}</p>
            <div
              className="position-relative mx-auto"
              style={{ maxWidth: 400 }}
            >
              <input
                className="form-control border-0 w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                Sign-Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <span className="me-1">©</span>
              <a className="border-bottom" href="#">
                Mental Health Consultant
              </a>
              , All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="me-1">Designed By</span>
              <a className="border-bottom" href="https://htmlcodex.com">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
