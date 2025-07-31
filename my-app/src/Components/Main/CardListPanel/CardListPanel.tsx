import "./CardListPanel.css";
import CartListItem from "./CardListItem/CardListItem";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import CardDetail from "./CardDetail/CardDetail";

interface CardListProps {
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

function CardListPanel(props: CardListProps) {
  const [, setSearchParams] = useSearchParams();
  const [selectedCardId, setSelectedCardId] = useState<string|null>(null);

  function changeCurrentCard(uid: string | null) {
    if (uid)
      setSearchParams((params) => {
        params.set("uid", uid);
        return params;
      });
    else
      setSearchParams((params) => {
        params.delete("uid");
        return params;
      });
    setSelectedCardId(uid);
  }

  if (!props.data) return <></>;
  let cardDetail = selectedCardId ? (
    <CardDetail uid={selectedCardId as string} changeCurrentCard={changeCurrentCard} />
  ) : (
    ""
  );
  const cardList = props.data.map((item) => {
    return (
      <div key={item.uid}>
        <CartListItem
          uid={item.uid}
          title={item.title}
          description={item.season.title}
          season={item.seasonNumber}
          episode={item.episodeNumber}
          changeCurrentCard={changeCurrentCard}
        />
      </div>
    );
  });
  return (
    <div className="card-list-panel">
      <div className="card-list">{cardList}</div>
      {cardDetail}
    </div>
  );
}

export default CardListPanel;
