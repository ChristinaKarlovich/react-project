import React, { useEffect, useState } from "react";
import "./Main.css";
import SearchPannel from "./SearchPanel/SearchPanel";
import CardListPanel from "./CardListPanel/CardListPanel";
import CardSkeleton from "./CardListPanel/CardListItem/CardSkeleton";
import ErrorInfo from "./ErrorInfo/ErrorInfo";
import fetchData from "../../API/api";

function Main () {
  const lsText = localStorage.getItem("searchText");
  const [searchText, setSearchText] = useState(lsText);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(()=> {
    loadData();
  },[])

  async function buttonClick(text: string | null){
    localStorage.setItem("searchText", text ? text : "");
    setSearchText(text as string);
    setIsLoading(true);
    const res = await fetchData(text);
    setData(res);
    setIsLoading(false)
  };

  async function loadData() {
    setIsLoading(true)
    const res = await fetchData(searchText);
    setData(res);
    setIsLoading(false)
  }

  function errorButtonClicked() {
    setError("error button clicked" );
  };
    if (error) {
      throw Error(error);
    }
    let show: React.ReactElement | null = null;

    if (isLoading) show = <CardSkeleton amount={10} />;
    else if (error) show = <ErrorInfo message={error} />;
    else show = <CardListPanel data={data} />;

    return (
      <div>
        <SearchPannel showResult={buttonClick} />
        {show}
        <button onClick={errorButtonClicked}>Throw Error</button>
      </div>
    );
  }

export default Main;
