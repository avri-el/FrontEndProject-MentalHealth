import { ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { database } from "../../config/Firebase/firebase";

const Article = () => {
  const [article1, setArticle1] = useState({});
  const [article2, setArticle2] = useState({});
  const [article3, setArticle3] = useState({});

  useEffect(() => {
    const article1Ref = ref(database, "article1/");
    onValue(article1Ref, (snapshot) => {
      const data = snapshot.val();
      setArticle1(data);
    });
    const article2Ref = ref(database, "article2/");
    onValue(article2Ref, (snapshot) => {
      const data = snapshot.val();
      setArticle2(data);
    });
    const article3Ref = ref(database, "article3/");
    onValue(article3Ref, (snapshot) => {
      const data = snapshot.val();
      setArticle3(data);
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
            Services
          </p>
          <h1>Health Care Solutions</h1>
        </div>
        <div className="row g-4">
          {/* Self-Care & Stress Management */}
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-light rounded h-100 p-5">
              <h4 className="mb-3">{article1.title}</h4>
              <p className="mb-4">
                <a
                  href="https://mentalhealthyfit.org/thinky/2024/4/8/identifying-and-managing-stress?gad_source=1&gclid=CjwKCAiAudG5BhAREiwAWMlSjGNT56prgisSuaoY5hwcV7sDFnob0Rxz6x_SJzPuf_9Z1FT_wgFngBoCHtcQAvD_BwE"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tips For Stress Identification and Management (Article){" "}
                </a>
                <br />
                {article1.paragraph}
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
              <h4 className="mb-3">{article2.title}</h4>
              <p className="mb-4">
                <a
                  href="https://www.youtube.com/watch?v=dBn0ETS6XDk"
                  target="_blank"
                  rel="noreferrer"
                >
                  Self Care: What It Really Is (YouTube){" "}
                </a>
                <br />
                {article2.paragraph}
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
              <h4 className="mb-3">{article3.title}</h4>
              <a
                href="https://www.pinerest.org/newsroom/articles/mental-health-awareness-blog/"
                target="_blank"
                rel="noreferrer"
              >
                The Importance of Mental Health Awareness (Article){" "}
              </a>
              <br />
              <p className="mb-4">{article3.paragraph}</p>
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
