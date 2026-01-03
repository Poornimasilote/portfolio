import heroImage from "../../assets/images/poornima-hero.png";
import "./HomeStyles.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="section-container home-container glass">
        <div className="home-text">
          <h1 className="heading-xl">
            Poornima Silote
          </h1>

          <p className="home-subtitle">
            Full-Stack Developer · AWS  · Product Engineer · Designer 
          </p>

          <p className="home-description text-muted">
            I build scalable full-stack applications, design clean user
            experiences, and engineer real-world products from idea to
            production.
          </p>

          <div className="home-actions">
            <a href="#contact" className="primary-btn">
              Contact Me
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

        <div className="home-image">
          <img src={heroImage} alt="Poornima" />
        </div>
      </div>
    </section>
  );
};

export default Home;
