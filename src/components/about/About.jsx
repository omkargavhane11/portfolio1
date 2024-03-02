import "./about.css";
import s3 from "../../images/aws-s3-logo.png";

import {
  html,
  css,
  javascript,
  nodejs,
  react,
  socket,
  redux,
  bootstrap,
  mui,
  mongodb,
  firebase
} from "../../data.js";

const About = () => {
  return (
    <div className="a">
      {/* <div className="a-left">
        <div className="a-card">
          <div className="a-card bg"></div>
          <img src={office_pic} alt="" className="a-img" />
        </div>
      </div> */}
      <div className="a-right">
        <h1 className="a-title">Skills</h1>
        {/* <p className="sub">
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
        </p> */}
        <div className="techstack">
          {/* <h1 className="techstack_heading">
            Knowledge of Languages,Technologies and Frameworks
          </h1> */}
          <div className="tech_items">
            <div className="tect_item_container">
              {" "}
              <img src={html} alt="" className="tech_item" />
              <div>HTML</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={css} alt="" className="tech_item" />
              <div>CSS</div>
            </div>
            <div className="tect_item_container">
              <img src={javascript} alt="" className="tech_item" />
              <div>JAVASCRIPT</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={react} alt="" className="tech_item" />
              <div>REACT</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={react} alt="" className="tech_item" />
              <div>REACT NATIVE</div>
            </div>
            <div className="tect_item_container">
              <img src={redux} alt="" className="tech_item" />
              <div>REDUX</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={bootstrap} alt="" className="tech_item" />
              <div>BOOTSTRAP</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={mui} alt="" className="tech_item" />
              <div>MUI</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={s3} alt="" className="tech_item" />
              <div>AWS S3</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={socket} alt="" className="tech_item" />
              <div>SOCKET</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={nodejs} alt="" className="tech_item" />
              <div>NODE JS</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={mongodb} alt="" className="tech_item" />
              <div>MONGO DB</div>
            </div>
            <div className="tect_item_container">
              {" "}
              <img src={firebase} alt="" className="tech_item" />
              <div>FIREBASE</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
