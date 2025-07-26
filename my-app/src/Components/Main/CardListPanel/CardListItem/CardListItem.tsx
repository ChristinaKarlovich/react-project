import "./CardListItem.css";

interface CardListItemProps {
  uid: string;
  title?: string;
  description?: string;
  season?: string;
  episode?: string;
}

function CardListItem(props: CardListItemProps) {
  return (
    <div className="card-item">
      <div className="card-title">{props.title}</div>
      <div className="card-desc">
        {props.description} s{props.season}e{props.episode}
      </div>
    </div>
  );
}

export default CardListItem;
