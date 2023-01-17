const Work = () => {
  return (
    <>
      <h3>My Work</h3>
      <div className="myWork">
        <div className="work box">
          <div className="container">
            <a
              href="https://react-weather-app-paula-cavender.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/weather-app-preview.png"
                className="preview"
                alt="preview"
              ></img>
              <div className="overlay">
                <div className="text">Check it out here!</div>
              </div>
            </a>
          </div>
          <div className="preview-text">
            <h4>Weather App</h4>
            <p>
              A react redux weather app using openweatherAPI and geolocation
            </p>
          </div>
        </div>
        <div className="work box">
          <div className="container">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/weather-app-preview.png"
                className="preview"
                alt="preview"
              ></img>
              <div className="overlay">
                <div className="text">Check it out here!</div>
              </div>
            </a>
          </div>
          <div className="preview-text">
            <h4>second project</h4>
            <p>Second project Description</p>
          </div>
        </div>
        <div className="work box">
          <div className="container">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/weather-app-preview.png"
                className="preview"
                alt="preview"
              ></img>
              <div className="overlay">
                <div className="text">Check it out here!</div>
              </div>
            </a>
          </div>
          <div className="preview-text">
            <h4>third project</h4>
            <p>third project Description</p>
          </div>
        </div>
        <div className="work box">
          <div className="container">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./assets/weather-app-preview.png"
                className="preview"
                alt="preview"
              ></img>
              <div className="overlay">
                <div className="text">Check it out here!</div>
              </div>
            </a>
          </div>
          <div className="preview-text">
            <h4>fourth project</h4>
            <p>fourth project Description</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
