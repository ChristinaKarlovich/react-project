import React from 'react';
import "./Main.css"
import SearchPannel from './SearchPanel/SearchPanel';
import CardListPanel from './CardListPanel/CardListPanel';
import CardSkeleton from './CardListPanel/CardListItem/CardSkeleton';

interface MainState {
  searchText: string| null,
  isLoading: boolean,
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
      data: null,
      isLoading: false};
  constructor(props: object) {

    super(props);
  }

  buttonClick = (text: string| null)=> {
    localStorage.setItem("searchText", text? text: "");
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
      this.setState({isLoading: true})
      fetch('https://stapi.co/api/v1/rest/episode/search', init)
      .then(res => res.json())
      .then(res=> this.setState({ data: res.episodes, isLoading: false }));
      
  };

  componentDidMount() {
    this.fetchData(this.state.searchText);
  }
  render(): React.ReactNode {
    const show = this.state.isLoading? 
      <CardSkeleton amount={10} />: 
      <CardListPanel data = {this.state.data}/>
    return <div>
      <SearchPannel searchText = {this.state.searchText} showResult = {this.buttonClick}/>
      {show}
        
    </div>
  }
}

export default Main
