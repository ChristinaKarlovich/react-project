import React from 'react';
import "./App.css";
import Header from "./Components/Header/Header.tsx";
import Main from './Components/Main/Main.tsx';

class App extends React.Component {
  render(): React.ReactNode {
    return <>
    <Header/>
    <Main/>
    </>;
  }
  
}

export default App;
