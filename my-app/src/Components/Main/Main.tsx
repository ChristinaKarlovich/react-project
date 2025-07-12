import React from 'react';
import "./Main.css"
import SearchPannel from './SearchPanel/SearchPanel';
import CardListPanel from './CardListPanel/CardListPanel';

class Main extends React.Component {
  constructor(props) {    

    super(props)
    this.state = { 
      searchText: null,
      data: null}
  }

  buttonClick = (text: string)=> {
    this.setState({searchText:text})
    console.log("button clicked");
    this.fetchData(text);
    
  }
  
  fetchData = async (searchText: string| null) => {
    try {
    let init: RequestInit| undefined

      if(searchText) {
        init = {
          method: "POST", // *GET, POST, PUT, DELETE, etc.
          mode: "cors", // no-cors, *cors, same-origin
          cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
          credentials: "same-origin", // include, *same-origin, omit
          headers: {
            //"Content-Type": "application/json",
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow", // manual, *follow, error
          referrerPolicy: "strict-origin-when-cross-origin", // no-referrer, *client
          body: new URLSearchParams({title: searchText, name: searchText}), // body data type must match "Content-Type" header
        }

      }
      const response = await fetch('https://stapi.co/api/v1/rest/episode/search', init);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.log(error.message);
    }
  };

  // Call the fetch function in componentDidMount
  componentDidMount() {
    this.fetchData(this.state.searchText);
  }
  render(): React.ReactNode {
    return <div>
      <SearchPannel searchText = {this.state.searchText} showResult = {this.buttonClick}/>
      <CardListPanel data = {this.state.data}/>
    </div>
  }
}

export default Main
