import "./App.css";
import About from "./Components/About/About.tsx";
import Header from "./Components/Header/Header.tsx";
import Main from "./Components/Main/Main.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound.tsx";
import Nav from "./Components/Nav/Nav.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
