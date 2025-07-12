import React from 'react';
import "./SearchPanel.css"

class SearchPannel extends React.Component {
   constructor(props) {
    super(props);
    this.state = {searchText:this.props.searchText};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit(event) {
    this.props.showResult(this.state.searchText);
    event.preventDefault();
  }
  render(): React.ReactNode {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text'value={this.state.searchText} onChange={this.handleChange}></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  }
}
export default SearchPannel;