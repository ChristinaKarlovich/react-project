import "./Pagination.css";

interface PaginationProps {
  pageNumber: number;
  firstPage: boolean;
  lastPage: boolean;
  changePage(step: number): void;
}

function Pagination(props: PaginationProps) {
  function handleClickNext() {
    if (props.lastPage) return;
    props.changePage(props.pageNumber + 1);
  }
  function handleClickPrev() {
    if (props.firstPage) return;
    props.changePage(props.pageNumber - 1);
  }

  return (
    <>
      <div className="pagination-wrapper">
        <div
          className={"page-change-btn " + (props.firstPage ? "disabled" : "")}
          onClick={handleClickPrev}
        >
          &lt;
        </div>
        <div>{props.pageNumber + 1}</div>
        <div
          className={"page-change-btn " + (props.lastPage ? "disabled" : "")}
          onClick={handleClickNext}
        >
          &gt;
        </div>
      </div>
    </>
  );
}
export default Pagination;
