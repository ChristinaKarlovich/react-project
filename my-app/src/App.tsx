import "./App.css";
import About from "./Components/About/About.tsx";
import Header from "./Components/Header/Header.tsx";
import Main from "./Components/Main/Main.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound.tsx";
import Nav from "./Components/Nav/Nav.tsx";
import { ThemeContext } from "./API/Contexts.ts";
import { useState } from "react";
import sunImg from "./assets/sun.svg";
import moonImg from "./assets/moon.svg";

function App() {
  const [theme, setTheme] = useState("light");
  const [themeImg, setThemeImg] = useState(sunImg);

  function changeTheme() {
    if (theme == "light") {
      setTheme("dark");
      setThemeImg(moonImg);
    } else {
      setTheme("light");
      setThemeImg(sunImg);
    }
  }

  return (
    <>
      <BrowserRouter>
        <ThemeContext value={theme}>
          <div className="theme-btn" onClick={changeTheme}>
            <img src={themeImg} />
          </div>
          <Nav />
          <Header />
          <Routes>
            <Route path="/" element={<Main />}>
              {/* <Route path="/?page" index element={<Main />}></Route> */}
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ThemeContext>
      </BrowserRouter>
    </>
  );
}

export default App;
