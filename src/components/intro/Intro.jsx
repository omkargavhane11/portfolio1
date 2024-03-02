import "./intro.css";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Omkar Gavhane</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">MERN Stack Web Developer</div>
              {/* <div className="i-title-item">ReactJS Developer</div>
              <div className="i-title-item">NodeJS Developer</div>
              <div className="i-title-item">Reader</div> */}
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes.
          </div>
          {/* <button className="resume_button">
            My Resume */}
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1b6TJLkh8GTm793AvNFKR2bMzPInDk1GR/view"
            className="resume_button"
          >
            Resume
          </a>
          {/* </button> */}
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={Pic} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
