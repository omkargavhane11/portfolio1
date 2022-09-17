import "./toggle.css";
import sun from "../../images/sun.png";
import moon from "../../images/moon.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const Toggle = () => {
  const theme = useContext(ThemeContext);

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE" });
  };

  return (
    <div className="t">
      <img src={sun} alt="" className="sun" />
      <img src={moon} alt="" className="moon" />
      <div
        className="t-btn"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? "0px" : "50%",
          // right: theme.state.darkMode === false && "0px",
        }}
      ></div>
    </div>
  );
};

export default Toggle;
