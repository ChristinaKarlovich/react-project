import React, { useEffect, useState } from "react";
import "./Main.css";
import SearchPannel from "./SearchPanel/SearchPanel";
import CardListPanel from "./CardListPanel/CardListPanel";
import CardSkeleton from "./CardListPanel/CardListItem/CardSkeleton";
import ErrorInfo from "./ErrorInfo/ErrorInfo";
import fetchData from "../../API/api";
import useLocalStorage from "../../Hooks/useLocalStorage";
import Pagination from "../Pagination/Pagination";
import { useSearchParams } from "react-router-dom";

function Main() {
  const [searchText, setSearchText] = useLocalStorage("searchText");
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const page: number | null = Number(searchParams.get("page"));
  const [pageNumber, setPageNumber] = useState(page ? page : 0);
  const [{ firstPage, lastPage }, setPageInfo] = useState({ firstPage: true, lastPage: false });

  useEffect(() => {
    loadData(searchText, pageNumber);
  }, []);

  async function buttonClick(text: string | null) {
    localStorage.setItem("searchText", text ? text : "");
    setSearchText(text as string);
    loadData(text as string, 0);
  }

  function changePage(page: number) {
    setSearchParams((params) => {
      params.set("page", String(page));
      return params;
    });

    setPageNumber(page);
    loadData(searchText as string, page);
  }

  async function loadData(text: string, page: number) {
    setIsLoading(true);
    const res = await fetchData(text, page);
    console.log(res);
    setData(res.item.episodes);
    setPageNumber(res.item.page.pageNumber);
    setPageInfo({ firstPage: res.item.page.firstPage, lastPage: res.item.page.lastPage });
    setIsLoading(false);
  }

  function errorButtonClicked() {
    setError("error button clicked");
  }
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
      <Pagination
        pageNumber={pageNumber}
        firstPage={firstPage}
        lastPage={lastPage}
        changePage={changePage}
      />
      <button onClick={errorButtonClicked}>Throw Error</button>
    </div>
  );
}

export default Main;
