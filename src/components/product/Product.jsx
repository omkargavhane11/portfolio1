import "./product.css";

import { useContext } from "react";
import { ThemeContext } from "../../context";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Product = ({ item }) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={darkMode ? "p dark" : "p"}>
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
            <div className="p--desc-name--value">{item.name}</div>
            <div className="p--desc-name">Description</div>
            <div className="p--desc-desc">{item.description}</div>
            <div className="p--links">
              <div className="p--link--item p--desc-name">Tech Stack</div>
              <div className="stack-items">
                {item.stack.map((s, index) => (
                  <img key={index} src={s} alt="" className="stack_item" />
                ))}
              </div>
            </div>
            <div className="p-redirect">
              <a href={item.github} target="_blank" rel="noreferrer">
                <GitHubIcon className="p-redirect-icon" />
              </a>
              <a href={item.link} target="_blank" rel="noreferrer">
                <LaunchIcon className="p-redirect-icon" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
