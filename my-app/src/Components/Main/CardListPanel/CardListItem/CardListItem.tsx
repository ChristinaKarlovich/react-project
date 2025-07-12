import React from 'react';
import "./CardListItem.css"

class CartListItem extends React.Component {
  constructor(props) {
    super(props)
    this.state =  { title: this.props.title,
                  description: this.props.description};
  }
  render(): React.ReactNode {
    return <>
      <div>{this.props.title}</div>
      <div>{this.props.description} s{this.props.season}e{this.props.episode}</div>
    </>
  }
}

export default CartListItem