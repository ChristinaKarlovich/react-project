import React from 'react';
import "./CardListPanel.css"
import CartListItem from './CardListItem/CardListItem';

class CardListPanel extends React.Component {  

  constructor(props) {
    super(props);
    console.log(props.data)
  }

  componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
    console.log(this.props.data)
    
  }

  render(): React.ReactNode {

    if(!this.props.data)
      return<></>
    let cardList = this.props.data.episodes.map((item=> {
      return <CartListItem title = {item.title} description = {item.season.title} season = {item.seasonNumber} episode = {item.episodeNumber} />
    } ))
    return <div>
    Cards{cardList}
    </div>
  }

}

export default CardListPanel;
