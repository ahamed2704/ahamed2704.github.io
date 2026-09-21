import "./Contact.css";

function Contact({ setActiveSection }) {
  const scrollToDashboard = () => {
    const dashboard = document.getElementById("dashboard");

    if (dashboard) {
      dashboard.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="contact-page">
      <button
        className="back-btn"
        onClick={scrollToDashboard}
        type="button"
      >
        ↑ Dashboard
      </button>

      <div className="contact-header">
        <span className="section-index">
          06 / CONNECT
        </span>

        <h1 className="contact-title">
          Let's Connect
        </h1>

        <p className="contact-description">
          Interested in mechanical design, CAD development,
          product engineering or technical collaboration?
          Feel free to get in touch.
        </p>
      </div>

      <div className="contact-layout">

        <div className="contact-main-card">

          <div className="contact-card-top">
            <span className="contact-label">
              GET IN TOUCH
            </span>

            <span className="contact-symbol">
              ↗
            </span>
          </div>

          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I am interested in opportunities involving mechanical
            design, CAD modelling, product development, engineering
            analysis and related mechanical engineering work.
          </p>

          <a
            className="contact-email"
            href="mailto:nasarahamedshaik2704@gmail.com"
          >
            nasarahamedshaik2704@gmail.com
          </a>

        </div>

        <div className="contact-details">

          <a
            className="contact-item"
            href="mailto:nasarahamedshaik2704@gmail.com"
          >
            <span className="contact-icon">
              ✉
            </span>

            <div>
              <span className="contact-item-label">
                EMAIL
              </span>

              <strong>
                nasarahamedshaik2704@gmail.com
              </strong>
            </div>
          </a>

          <a
            className="contact-item"
            href="tel:+919182548038"
          >
            <span className="contact-icon">
              ☎
            </span>

            <div>
              <span className="contact-item-label">
                PHONE
              </span>

              <strong>
                +91 91825 48038
              </strong>
            </div>
          </a>

          <a
            className="contact-item"
            href="https://www.linkedin.com/in/nasar-ahamed-shaik-671a5a182"
            target="_blank"
            rel="noreferrer"
          >
            <span className="contact-icon">
              in
            </span>

            <div>
              <span className="contact-item-label">
                LINKEDIN
              </span>

              <strong>
                LinkedIn Profile
              </strong>
            </div>

            <span className="contact-arrow">
              ↗
            </span>
          </a>

          <div className="contact-item contact-location">

            <span className="contact-icon">
              ⌖
            </span>

            <div>
              <span className="contact-item-label">
                LOCATION
              </span>

              <strong>
                Andhra Pradesh, India
              </strong>
            </div>

          </div>

        </div>

      </div>

      <div className="contact-footer-line">
        <span>
          MECHANICAL DESIGN ENGINEER
        </span>

        <span>
          CAD • DESIGN • ENGINEERING
        </span>
      </div>

    </section>
  );
}

export default Contact;