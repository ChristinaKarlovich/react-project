import { useState } from "react";
import "./SearchPanel.css";

interface SearchPanelProps {
  searchText: string | null;
  showResult: (text: string | null) => void;
}

function SearchPannel(props: SearchPanelProps) {
  const text = localStorage.getItem("searchText");
  const [searchText, setSearchText] = useState(text);

  function handleChange(event: { target: { value: string } }) {
    setSearchText(event.target.value);
  }

  function handleSubmit(event: { preventDefault: () => void }) {
    props.showResult(searchText);
    event.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Episode title</label>
        <input type="text" onChange={handleChange} value={searchText ? searchText : ""}></input>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
export default SearchPannel;
