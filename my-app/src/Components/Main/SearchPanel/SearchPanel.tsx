import React from 'react';
import './SearchPanel.css';

interface SearchPanelProps {
  searchText: string | null;
  showResult: (text: string | null) => void;
}

interface SearchPanelState {
  searchText: string | null;
  data?: [];
}
class SearchPannel extends React.Component<SearchPanelProps, SearchPanelState> {
  constructor(props: SearchPanelProps) {
    super(props);
    const text = localStorage.getItem('searchText');
    this.state = { searchText: text };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event: { target: { value: string } }) {
    this.setState({ searchText: event.target.value });
  }

  handleSubmit(event: { preventDefault: () => void }) {
    this.props.showResult(this.state.searchText);
    event.preventDefault();
  }

  render(): React.ReactNode {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Episode title</label>
          <input
            type='text'
            onChange={this.handleChange}
            value={this.state.searchText ? this.state.searchText : ''}
          ></input>
          <input type='submit' value='Search' />
        </form>
      </div>
    );
  }
}
export default SearchPannel;
