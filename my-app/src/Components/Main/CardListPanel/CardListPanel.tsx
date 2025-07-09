import { Component, type ReactNode } from 'react';
import "./CardListPanel.css"
import CartListItem from './CardListItem/CardListItem';

class CardListPanel extends Component {
  render(): ReactNode {
    return <div>
    Cards
    <ul>
      <li><CartListItem/></li>
      <li><CartListItem/></li>
      <li><CartListItem/></li>
      <li><CartListItem/></li>
      <li><CartListItem/></li>
    </ul>
    </div>
  }
}

export default CardListPanel;
