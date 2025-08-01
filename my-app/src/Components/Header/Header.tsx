import { useContext } from "react";
import "./Header.css";
import { ThemeContext } from "../../API/Contexts";

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <div className={"heder-wrapper" + " " + theme}>
      <h1>Star Trek Series</h1>
    </div>
  );
}

export default Header;
