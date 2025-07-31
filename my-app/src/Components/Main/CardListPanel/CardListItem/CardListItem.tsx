import "./CardListItem.css";

interface CardListItemProps {
  uid: string;
  title?: string;
  description?: string;
  season?: string;
  episode?: string;
  changeCurrentCard(uid: string | null): void;
}

function CardListItem(props: CardListItemProps) {
  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const divElem = event.target as HTMLElement;
    const divCardItem = divElem.closest(".card-item");
    props.changeCurrentCard(divCardItem ? divCardItem.id : null);
  }
  return (
    <div className="card-item" id={props.uid} onClick={handleClick}>
      <div className="card-title">{props.title}</div>
      <div className="card-desc">
        {props.description} s{props.season}e{props.episode}
      </div>
    </div>
  );
}

export default CardListItem;
