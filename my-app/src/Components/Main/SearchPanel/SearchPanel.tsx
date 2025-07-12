import React from 'react';
import "./SearchPanel.css"

interface SearchPanelProps {
  searchText: string| null
  showResult: (text: string| null) => void;
}

interface SearchPanelState {
  searchText: string| null;
  data?: [];
}
class SearchPannel extends React.Component<SearchPanelProps, SearchPanelState> {
  
   constructor(props: SearchPanelProps) {
    super(props);
    this.state = {searchText:this.props.searchText};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string| null; }; }) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit(event: { preventDefault: () => void; }) {
    this.props.showResult(this.state.searchText);
    event.preventDefault();
  }
  render(): React.ReactNode {
    return <div>
      <form onSubmit={this.handleSubmit}>
        <input type='text' onChange={this.handleChange}></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  }
}
export default SearchPannel;