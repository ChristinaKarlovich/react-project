import React from "react";
import "./CardListItem.css";

interface CardListItemProps {
  uid: string;
  title?: string;
  description?: string;
  season?: string;
  episode?: string;
}

class CardListItem extends React.Component<CardListItemProps> {
  constructor(props: CardListItemProps) {
    super(props);
    this.state = { title: props.title, description: props.description };
  }
  render(): React.ReactNode {
    return (
      <div className="card-item">
        <div className="card-title">{this.props.title}</div>
        <div className="card-desc">
          {this.props.description} s{this.props.season}e{this.props.episode}
        </div>
      </div>
    );
  }
}

export default CardListItem;
