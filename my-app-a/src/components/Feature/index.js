const Feature = () => {
  return (
    <div className="container-fluid bg-primary overflow-hidden my-5 px-lg-0">
      <div className="container feature px-lg-0">
        <div className="row g-0 mx-lg-0">
          <div
            className="col-lg-6 feature-text py-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="p-lg-5 ps-lg-0">
              <p className="d-inline-block border rounded-pill text-light py-1 px-4">
                Programs
              </p>
              <h1 className="text-white mb-4">
                Mental Health Programs and Support
              </h1>
              <p className="text-white mb-4 pb-2">
                We offer a variety of mental health programs, support groups,
                and workshops that you can join to receive support and improve
                your mental well-being. Join us for a positive and enriching
                experience.
              </p>
              <div className="row g-4">
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: 55, height: 55 }}
                    >
                      <i className="fa fa-user-md text-primary" />
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Experience</p>
                      <h5 className="text-white mb-0">Doctors</h5>
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: 55, height: 55 }}
                    >
                      <i className="fa fa-users text-primary" />
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Community</p>
                      <h5 className="text-white mb-0">Support Group</h5>
                      <i className="fa fa-check text-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: 55, height: 55 }}
                    >
                      <i className="fa fa-brain text-primary" />
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Development</p>
                      <h5 className="text-white mb-0">Workshop</h5>
                      <i className="fa fa-comment-medical text-primary" />
                    </div>
                  </div>
                </div>
                <div className="col-6">
                  <div className="d-flex align-items-center">
                    <div
                      className="d-flex flex-shrink-0 align-items-center justify-content-center rounded-circle bg-light"
                      style={{ width: 55, height: 55 }}
                    >
                      <i className="fa fa-calendar-alt text-primary" />
                    </div>
                    <div className="ms-4">
                      <p className="text-white mb-2">Schedule</p>
                      <h5 className="text-white mb-0">Programs</h5>
                      <i className="fa fa-headphones text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-6 pe-lg-0 wow fadeIn"
            data-wow-delay="0.5s"
            style={{ minHeight: 400 }}
          >
            <div className="position-relative h-100">
              <img
                className="position-absolute img-fluid w-100 h-100"
                src="/img/gugel.jpg"
                style={{ objectFit: "cover" }}
                alt="Mental Health Programs"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
