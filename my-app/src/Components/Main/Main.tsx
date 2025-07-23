import React from "react";
import "./Main.css";
import SearchPannel from "./SearchPanel/SearchPanel";
import CardListPanel from "./CardListPanel/CardListPanel";
import CardSkeleton from "./CardListPanel/CardListItem/CardSkeleton";
import ErrorInfo from "./ErrorInfo/ErrorInfo";
import fetchData from "../../API/api";

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

  buttonClick = async (text: string | null) => {
    localStorage.setItem("searchText", text ? text : "");
    this.setState({ searchText: text });
    this.setState({ isLoading: true });
    const res = await fetchData(text);
    this.setState({ data: res, isLoading: false });
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const res = await fetchData(this.state.searchText);
    this.setState({ data: res, isLoading: false });
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
        <SearchPannel searchText={this.state.searchText} showResult={this.buttonClick} />
        {show}
        <button onClick={this.errorButtonClicked}>Throw Error</button>
      </div>
    );
  }
}

export default Main;
