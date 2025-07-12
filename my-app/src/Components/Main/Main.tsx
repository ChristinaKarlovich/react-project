import React from 'react';
import "./Main.css"
import SearchPannel from './SearchPanel/SearchPanel';
import CardListPanel from './CardListPanel/CardListPanel';

interface MainState {
  searchText: string| null,
  data?: [{
    uid: string
    title: string, 
    season: {title:string}, 
    seasonNumber: string, 
    episodeNumber: string
  }]| null
}

class Main extends React.Component<object , MainState> {
  
  state: MainState = { 
      searchText: null,
      data: null};
  constructor(props: object) {

    super(props);
  }

  buttonClick = (text: string| null)=> {
    this.setState({searchText:text})
    this.fetchData(text);
    
  }
  
  fetchData = async (searchText: string| null) => {
    let init: RequestInit| undefined

      if(searchText) {
        init = {
          method: "POST",
          mode: "cors", 
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          redirect: "follow",
          referrerPolicy: "strict-origin-when-cross-origin",
          body: new URLSearchParams({title: searchText, name: searchText}),
        }

      }
      const response = await fetch('https://stapi.co/api/v1/rest/episode/search', init);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      this.setState({ data: data.episodes });
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
