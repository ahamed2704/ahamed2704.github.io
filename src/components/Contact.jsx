import "./Contact.css";

function Contact({ setActiveSection }) {
  return (
    <div className="contact-page">

      <button
        className="back-btn"
        onClick={() => setActiveSection("dashboard")}
      >
        ← Dashboard
      </button>

      <h1 className="contact-title">
        Contact
      </h1>

      <div className="contact-card">

        <h2>Let's Connect</h2>

        <div className="contact-item">
          📧 nasarahamedshaik2704@gmail.com
        </div>

        <div className="contact-item">
          📱 +91 91825 48038
        </div>

        <div className="contact-item">
          💼 https://www.linkedin.com/in/nasar-ahamed-shaik-671a5a182
        </div>

        <div className="contact-item">
          📍 Andhra Pradesh, India
        </div>

      </div>

    </div>
  );
}

export default Contact;