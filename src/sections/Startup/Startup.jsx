import "./StartupStyles.css";

const Startup = () => {
  return (
    <section id="startup">
      <div className="section-container startup-section">
        <h2 className="heading-lg">Poornima as a Startup Product Engineer</h2>

        <p className="startup-intro text-muted">
          I’ve worked at the intersection of engineering, product, and execution —
          building real applications, iterating with users, and shipping features
          that actually get used.
        </p>

        <div className="startup-grid">
          <div className="startup-card glass">
            <h4>End-to-End Ownership</h4>
            <p className="text-muted">
              Took products from idea to production — handling frontend,
              backend APIs, database design, and deployment decisions.
            </p>
          </div>

          <div className="startup-card glass">
            <h4>Product Thinking</h4>
            <p className="text-muted">
              Designed flows based on real user needs, not assumptions —
              balancing usability, performance, and feasibility.
            </p>
          </div>

          <div className="startup-card glass">
            <h4>Execution Under Constraints</h4>
            <p className="text-muted">
              Built and shipped features with limited resources, tight timelines,
              and evolving requirements — common in early-stage startups.
            </p>
          </div>

          <div className="startup-card glass">
            <h4>Iteration & Improvement</h4>
            <p className="text-muted">
              Improved features through feedback loops, refactoring, and
              performance optimizations rather than one-off builds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Startup;
