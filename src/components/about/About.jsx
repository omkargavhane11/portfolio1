import "./about.css";
import red from "../../images/red.png";
import formal from "../../images/formal.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <div className="a-card bg"></div>
          <img src={red} alt="" className="a-img" />
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
      </div>
    </div>
  );
};

export default About;
