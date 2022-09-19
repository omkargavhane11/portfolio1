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
    <div
      className="t"
      style={{
        backgroundColor: theme.state.darkMode
          ? "rgb(154, 177, 192)"
          : "lightgray",
        border: theme.state.darkMode
          ? "rgb(154, 177, 192)"
          : "1px solid lightgray",
      }}
    >
      <img src={sun} alt="" className="sun" />
      <img src={moon} alt="" className="moon" />
      <div
        className="t-btn"
        onClick={handleClick}
        style={{
          left: theme.state.darkMode ? "50%" : "-2px",
          backgroundColor: theme.state.darkMode ? "rgb(43, 133, 193)" : "gray",
          // right: theme.state.darkMode === false && "0px",
        }}
      ></div>
    </div>
  );
};

export default Toggle;
