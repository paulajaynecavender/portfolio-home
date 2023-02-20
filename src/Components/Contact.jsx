const Contact = () => {
  return (
    <>
      <div className="contact container" id="contact">
        <h3>Contact Me </h3>
        <div className="icons">
          <a
            href="mailto:paula.cavender@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/email2.svg"} alt="email"></img>
            <p>paula.cavender@gmail.com</p>
          </a>
          <a
            href="https://github.com/paulajaynecavender"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/github2.svg"} alt="github"></img>
            <p>paulajaynecavender</p>
          </a>
          <a
            href="https://www.linkedin.com/in/paulacavender/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={"./assets/linkedin2.svg"} alt="linkedin"></img>
            <p>paulacavender</p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
