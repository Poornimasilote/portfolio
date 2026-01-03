import awsImage from "../../assets/images/aws-architecture.png";
import awsCapabilities from "./awsData";
import "./CloudStyles.css";

const Cloud = () => {
  return (
    <section id="cloud">
      <div className="section-container cloud-section">
        <h2 className="heading-lg">Poornima as a Cloud & AWS Engineer</h2>

        <div className="cloud-layout">
          {/* Architecture Panel */}
          <div className="cloud-architecture glass">
            <img src={awsImage} alt="AWS Architecture" />
            <p className="text-muted">
              Typical architecture used across my MERN applications — frontend,
              backend services, authentication, and cloud storage.
            </p>
          </div>

          {/* Capability Cards */}
          <div className="cloud-cards">
            {awsCapabilities.map((item) => (
              <div key={item.title} className="cloud-card glass">
                <h4>{item.title}</h4>
                <p className="text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="cloud-certification">
          <span>AWS Certified Solutions Architect – Associate</span>
        </div>
      </div>
    </section>
  );
};

export default Cloud;
