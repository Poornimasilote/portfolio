import designColumns from "./designData";
import "./DesignerStyles.css";

const Designer = () => {
  return (
    <section id="designer">
      <div className="section-container designer-section">
        <h2 className="heading-lg">Poornima as a Designer</h2>

        <div className="design-grid">
          {designColumns.map((column, index) => (
            <div
              key={index}
              className={`design-column ${
                index % 2 === 0 ? "up" : "down"
              }`}
            >
              {column.map((img, i) => (
                <div key={i} className="design-card glass">
                  <img src={img} alt="Design work" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Designer;
