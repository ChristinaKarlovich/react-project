import { Component, type ReactNode } from 'react';
import "./SearchPanel.css"

class SearchPannel extends Component {
  render(): ReactNode {
    return <div>
      <input type='text'></input>
      <button>Search</button>
    </div>
  }
}
export default SearchPannel;