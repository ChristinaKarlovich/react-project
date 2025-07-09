import { Component, type ReactNode } from 'react';
import "./Main.css"
import SearchPannel from './SearchPanel/SearchPanel';
import CardListPanel from './CardListPanel/CardListPanel';

class Main extends Component {
  render(): ReactNode {
    return <div>
      <SearchPannel/>
      <CardListPanel/>
    </div>
  }
}

export default Main
