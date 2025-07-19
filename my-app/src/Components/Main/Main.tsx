import React from "react";
import "./Main.css";
import SearchPannel from "./SearchPanel/SearchPanel";
import CardListPanel from "./CardListPanel/CardListPanel";
import CardSkeleton from "./CardListPanel/CardListItem/CardSkeleton";
import ErrorInfo from "./ErrorInfo/ErrorInfo";

interface MainState {
  searchText: string | null;
  isLoading: boolean;
  error: string;
  data?:
    | [
        {
          uid: string;
          title: string;
          season: { title: string };
          seasonNumber: string;
          episodeNumber: string;
        },
      ]
    | null;
}

class Main extends React.Component<object, MainState> {
  state: MainState = {
    searchText: null,
    data: null,
    isLoading: false,
    error: "",
  };
  constructor(props: object) {
    super(props);
  }

  buttonClick = (text: string | null) => {
    localStorage.setItem("searchText", text ? text : "");
    this.setState({ searchText: text });
    this.fetchData(text);
  };

  fetchData = async (searchText: string | null) => {
    let init: RequestInit | undefined;

    if (searchText) {
      init = {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        redirect: "follow",
        referrerPolicy: "strict-origin-when-cross-origin",
        body: new URLSearchParams({ title: searchText, name: searchText }),
      };
    }
    this.setState({ isLoading: true });
    fetch("https://stapi.co/api/v1/rest/episode/search", init)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.episodes, isLoading: false }))
      .catch((error) => this.setState({ error: error.message }));
  };

  componentDidMount() {
    this.fetchData(this.state.searchText);
  }

  errorButtonClicked = () => {
    this.setState({ error: "error button clicked" });
  };

  render(): React.ReactNode {
    if (this.state.error) {
      throw Error(this.state.error);
    }
    let show: React.ReactElement | null = null;

    if (this.state.isLoading) show = <CardSkeleton amount={10} />;
    else if (this.state.error) show = <ErrorInfo message={this.state.error} />;
    else show = <CardListPanel data={this.state.data} />;

    return (
      <div>
        <SearchPannel
          searchText={this.state.searchText}
          showResult={this.buttonClick}
        />
        {show}
        <button onClick={this.errorButtonClicked}>Throw Error</button>
      </div>
    );
  }
}

export default Main;
