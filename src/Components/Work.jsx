import { project1, project2, project3, project4 } from "./text";

const Work = () => {
  return (
    <>
      <div className="myWork container" id="mywork">
        <div className="inner-container">
          <h3 id="title">my work</h3>
          <div className="work-container">
            <div className="work box">
              <div className="img-container">
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
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </a>
              </div>
              <div className="preview-text">
                <h4>Weather App</h4>
                <p>{project1}</p>
              </div>
            </div>
            <div className="work box">
              <div className="img-container">
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
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </a>
              </div>
              <div className="preview-text">
                <h4>Fantasy Football App</h4>
                <p>{project2}</p>
              </div>
            </div>
            <div className="work box">
              <div className="img-container">
                <a
                  href="https://charming-jelly-8d2da4.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./assets/nowness.png"
                    className="preview"
                    alt="preview"
                  ></img>
                  <div className="overlay">
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </a>
              </div>
              <div className="preview-text">
                <h4>CSS & SASS clone</h4>
                <p>{project3}</p>
              </div>
            </div>
            <div className="work box">
              <div className="img-container">
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
                    <img src="./assets/arrow.svg" alt="arrow" />
                  </div>
                </a>
              </div>
              <div className="preview-text">
                <h4>fourth project</h4>
                <p>{project4}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
