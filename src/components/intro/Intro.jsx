import "./intro.css";
import Pic from "../../images/dp_omkar.png";
import dp_bg from "../../images/dp_1.png";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name">Omkar Gavhane</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">Content Creator</div>
              <div className="i-title-item">Reader</div>
            </div>
          </div>
          <div className="i-desc">
            I design and develop services for customers of all sizes.
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Pic} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;
