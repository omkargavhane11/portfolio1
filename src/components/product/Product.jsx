import "./product.css";
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
import chakraui from "../../images/chakra-ui.png";

const Product = ({ item }) => {
  return (
    <a href={item.link} target="_blank" rel="noreferrer">
      <div className="p">
        <div className="p-top"></div>
        <div className="p-bottom">
          <div className="p-project">
            {/* <div className="p-browser">
            <div className="p-circle"></div>
            <div className="p-circle"></div>
            <div className="p-circle"></div>
          </div> */}
            <img src={item.img} alt="" className="p-img" />
          </div>
          <div className="p--detail">
            <div className="p--detail--wrapper">
              <div className="p--desc-name">Project type</div>
              <div className="p--desc-name--value">e-commerce </div>
              <div className="p--desc-desc">
                All features of modern day e-comm are included.
              </div>
              <div className="p--links">
                <div className="p--link--item">Tech Stack</div>
                <div className="stack-items">
                  <img src={html} alt="" className="stack_item" />
                  <img src={css} alt="" className="stack_item" />
                  <img src={javascript} alt="" className="stack_item" />
                  <img src={react} alt="" className="stack_item" />
                  <img src={redux} alt="" className="stack_item" />
                  <img src={chakraui} alt="" className="stack_item" />
                  <img src={mui} alt="" className="stack_item" />
                  <img src={s3} alt="" className="stack_item" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Product;
