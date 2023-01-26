import { fantasyFootballApp, weatherApp } from "./text";

const Work = () => {
  return (
    <>
      <div className="myWork container">
        <h3>My Work</h3>
        <div className="work-container">
          <div className="work box">
            <div className="overlay-container">
              <a
                href="https://react-weather-app-paula-cavender.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/weather-app-preview2.png"
                  className="preview"
                  alt="preview"
                ></img>
                <div className="overlay">
                  <div className="arrow">
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </a>
            </div>
            <div className="preview-text">
              <h4>Weather App</h4>
              <p>{weatherApp}</p>
            </div>
          </div>
          <div className="work box">
            <div className="overlay-container">
              <a
                href="http://fantasy-football-app.uk/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="./assets/football-preview.png"
                  className="preview"
                  alt="preview"
                ></img>
                <div className="overlay">
                  <div className="arrow">
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </a>
            </div>
            <div className="preview-text">
              <h4>Fantasy Football App</h4>
              <p>{fantasyFootballApp}</p>
            </div>
          </div>
          <div className="work box">
            <div className="overlay-container">
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
                  <div className="arrow">
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </a>
            </div>
            <div className="preview-text">
              <h4>third project</h4>
              <p>third project Description</p>
            </div>
          </div>
          <div className="work box">
            <div className="overlay-container">
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
                  <div className="arrow">
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </div>
              </a>
            </div>
            <div className="preview-text">
              <h4>fourth project</h4>
              <p>fourth project Description</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
