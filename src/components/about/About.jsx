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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ad
          impedit laborum, temporibus cumque, enim ipsum, possimus minima
          necessitatibus accusamus modi voluptates consectetur id! Voluptatibus
          repudiandae soluta ullam molestiae? Ut!
        </p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae maxime
          officiis maiores reiciendis praesentium esse suscipit fugit iure
          doloribus eligendi nostrum unde, dolor impedit minus possimus minima
          repellendus placeat deleniti. Beatae iusto itaque quibusdam. Neque
          exercitationem reiciendis ea voluptatem totam illo eos repudiandae
          excepturi. Distinctio deserunt vel quis maxime, rerum suscipit quidem
          nihil porro, odio, accusamus nesciunt ducimus aliquam neque! Adipisci,
          at expedita voluptate vero, modi veniam tempore nam eveniet suscipit
          necessitatibus nobis nemo aperiam dolorum. Nam similique, omnis
          tenetur tempora asperiores tempore sequi ipsa aspernatur, amet ut
          nulla repellat.
        </p>
      </div>
    </div>
  );
};

export default About;
