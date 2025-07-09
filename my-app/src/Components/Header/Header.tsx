import { Component, type ReactNode } from 'react';
import "./Header.css"

class Header extends Component {
  render(): ReactNode {
    return <div className ="heder-wrapper">
      <h1>Star Trek</h1>
    </div>
  }
}

export default Header;