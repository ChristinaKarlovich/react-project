import { Component, type ReactNode } from 'react';
import "./App.css";
import Header from "./Components/Header/Header.tsx";
import Main from './Components/Main/Main.tsx';

class App extends Component {
  render(): ReactNode {
    return <>
    <Header/>
    <Main/>
    </>;
  }
  
}

export default App;
