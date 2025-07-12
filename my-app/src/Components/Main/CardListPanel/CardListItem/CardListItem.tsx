import React from 'react';
import "./CardListItem.css"

interface CardListItemProps {
  uid: string,
  title?: string,
  description?: string
  season?: string,
  episode?: string
}

class CardListItem extends React.Component<CardListItemProps>{
  constructor(props: CardListItemProps) {
    super(props)
    this.state =  { title: props.title,
                  description: props.description};
  }
  render(): React.ReactNode {
    return <>
      <div>{this.props.title}</div>
      <div>{this.props.description} s{this.props.season}e{this.props.episode}</div>
    </>
  }
}

export default CardListItem