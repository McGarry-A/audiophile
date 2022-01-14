import "./Features.css";

const Features = () => {
  return (
    <div className="features-container">
      <div className="features-col-1">
          <h2>Features</h2>
          <p>Features Desc</p>
      </div>
      <div className="features-col-2">
          <div className="features-col-2-header">
              <h2>In The Box</h2>
          </div>
          <div className="features-col-2-list">
              <ul>Map through this and display on screen</ul>
          </div>
      </div>
    </div>
  );
};

export default Features;
