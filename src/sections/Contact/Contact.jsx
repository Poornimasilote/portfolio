import "./ContactStyles.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="section-container contact-section glass">
        <h2 className="heading-lg">Let’s Build Something Meaningful</h2>

        <p className="contact-text text-muted">
          I’m open to full-time roles, startup opportunities, and meaningful
          collaborations. If my work resonates with you, let’s connect.
        </p>

        <div className="contact-actions">
          <a href="mailto:poornimasilote1502@gmail.com.com" className="primary-btn">
            Email Me
          </a>

          <a
            href="https://www.linkedin.com/in/poornima-silote"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/Poornimasilote"
            target="_blank"
            rel="noreferrer"
            className="secondary-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
