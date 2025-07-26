import "./CardListPanel.css";
import CartListItem from "./CardListItem/CardListItem";

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
  if (!props.data) return <></>;
  const cardList = props.data.map((item) => {
    return (
      <div key={item.uid}>
        <CartListItem
          uid={item.uid}
          title={item.title}
          description={item.season.title}
          season={item.seasonNumber}
          episode={item.episodeNumber}
        />
      </div>
    );
  });
  return <div className="card-list">{cardList}</div>;
}

export default CardListPanel;
