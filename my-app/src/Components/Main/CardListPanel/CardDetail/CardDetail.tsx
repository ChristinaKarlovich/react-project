import { useEffect, useState } from "react";
import { getEpisode } from "../../../../API/api";
import "./CardDetail.css";

interface CardDetailProps {
  uid: string;
  changeCurrentCard(uid: string | null): void;
}

function CardDetail(props: CardDetailProps) {
  const [title, setTitle] = useState();
  const [airDate, setAirDate] = useState();
  const [episodeNumber, setEpisodeNumber] = useState();
  useEffect(() => {
    loadData(props.uid);
  });

  async function loadData(uid: string) {
    const data = await getEpisode(uid);
    if (data) {
      setTitle(data.item.episode.title);
      setAirDate(data.item.episode.usAirDate);
      setEpisodeNumber(data.item.episode.episodeNumber);
    }
  }
  function handleClick() {
    props.changeCurrentCard(null);
  }

  return (
    <div className="card-wrapper">
      <div className="close-btn-wrapper">
        <div id="close-btn" onClick={handleClick}>
          X
        </div>
      </div>
      <div>{title}</div>
      <div>AirDate: {airDate}</div>
      <div>episode: {episodeNumber}</div>
    </div>
  );
}

export default CardDetail;
