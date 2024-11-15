const Testimonial = () => {
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
              <p>
                I've been dealing with a lot of stress and this platform has
                been a game-changer for me. The consultants are so easy to talk
                to, and the articles and videos really helped me understand what
                I'm going through. I feel much more in control of my mental
                health now and have the tools I need to handle things better.
                I'm really grateful for all the support.
              </p>
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
              <p>
                For the longest time, I've been battling anxiety, and it felt
                like no one understood. I decided to give this website a shot,
                and it's been a total turning point for me. The resources here,
                from the expert advice to the helpful articles, have given me a
                better understanding of what I'm going through. I now feel more
                confident and equipped to handle things, and I'm so glad I found
                this platform.
              </p>
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
              <p>
                I've never been one to talk openly about my mental health, but I
                was really at a breaking point. This website made it so much
                easier to find the help I needed. The consultants were
                understanding and gave me practical tips that I could actually
                apply in my everyday life. The videos and stories on the site
                also gave me hope that I wasn't alone in what I was going
                through. I feel like I'm on the right path now.
              </p>
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
