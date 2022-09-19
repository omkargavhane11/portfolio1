import "./about.css";
import red from "../../images/red.png";
import formal from "../../images/formal.png";
import dp_bg from "../../images/dp_1.png";
import html from "../../images/html_logo.png";
import css from "../../images/css_logo.jfif";
import javascript from "../../images/js_logo.png";
import react from "../../images/react_logo.jpg";
import redux from "../../images/redux_logo.png";
import bootstrap from "../../images/bootstrap_logo.jpg";
import mui from "../../images/mui_logo.png";
import s3 from "../../images/aws-s3_logo.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <div className="a-card bg"></div>
          <img src={dp_bg} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="sub">
          I have switched my career trajectory from Mechnical Engg. to Full
          Stack Web Developement.
        </p>
        <p className="a-desc">
          I look forward to work with the best talents in the industry. I will
          do so by upskilling myself to the skill level which industry demands.
          For what I can do as of now is just the tip of the iceberg. I am sure
          that whatever shortcomings I have from skills standpoint, I will
          overcome that very quickly. I am a passionate person who takes his
          work very seriously. I am someone who tries to build the trust about
          my skill through delivering the quality work.
        </p>
        <div className="techstack">
          <h1 className="techstack_heading">
            Knowledge of Tools and Frameworks
          </h1>
          <div className="tech_items">
            <img src={html} alt="" className="tech_item" />
            <img src={css} alt="" className="tech_item" />
            <img src={javascript} alt="" className="tech_item" />
            <img src={react} alt="" className="tech_item" />
            <img src={redux} alt="" className="tech_item" />
            <img src={bootstrap} alt="" className="tech_item" />
            <img src={mui} alt="" className="tech_item" />
            <img src={s3} alt="" className="tech_item" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
