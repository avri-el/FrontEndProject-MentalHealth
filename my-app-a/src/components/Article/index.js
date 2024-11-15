const Article = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: 600 }}
        >
          <p className="d-inline-block border rounded-pill py-1 px-4">
            Services
          </p>
          <h1>Health Care Solutions</h1>
        </div>
        <div className="row g-4">
          {/* Self-Care & Stress Management */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa fa-smile text-primary fs-4" />
              </div>
              <h4 className="mb-3">Self-Care &amp; Stress Management</h4>
              <p className="mb-4">
                <a
                  href="https://mentalhealthyfit.org/thinky/2024/4/8/identifying-and-managing-stress?gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjGNT56prgisSuaoY5hwcV7sDFnob0Rxz6x_SJzPuf_9Z1FT_wgFngBoCHtcQAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tips For Stress Identification and Management (Article){" "}
                </a>
                <br />
                Tips and techniques to help you manage stress and maintain your
                mental well-being. Learn how to cope with everyday challenges
                and prioritize self-care.
              </p>
              <a className="btn" href>
                <i className="fa fa-plus text-primary me-3" />
                Read More
              </a>
            </div>
          </div>
          {/* Visual & Audio Content */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa fa-play-circle text-primary fs-4" />
              </div>
              <h4 className="mb-3">Visual &amp; Audio Content</h4>
              <p className="mb-4">
                <a
                  href="https://www.youtube.com/watch?v=dBn0ETS6XDk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Self Care: What It Really Is (YouTube){" "}
                </a>
                <br />
                Access engaging videos and audio content from platforms like
                YouTube to explore various health topics. Learn in a fun and
                interactive way.
              </p>
              <a className="btn" href>
                <i className="fa fa-plus text-primary me-3" />
                Read More
              </a>
            </div>
          </div>
          {/* Articles on Mental Health Topics */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-light rounded h-100 p-5">
              <div
                className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                style={{ width: 65, height: 65 }}
              >
                <i className="fa fa-newspaper text-primary fs-4" />
              </div>
              <h4 className="mb-3">Mental Health Articles</h4>
              <a
                href="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"
                target="_blank"
                rel="noreferrer"
              >
                The Importance of Mental Health Awareness (Article){" "}
              </a>
              <br />
              <p className="mb-4">
                Explore articles covering a range of mental health topics, from
                understanding mental health issues to learning positive coping
                strategies. Get the knowledge and support you need.
              </p>
              <a className="btn" href>
                <i className="fa fa-plus text-primary me-3" />
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Article;
