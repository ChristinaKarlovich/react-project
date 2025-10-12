import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface CardSceletonProps {
  amount: number;
}
interface CardSceletonState {
  loadCards: number[];
}

class CardSkeleton extends React.Component<CardSceletonProps, CardSceletonState> {
  constructor(props: CardSceletonProps) {
    super(props);

    this.state = { loadCards: Array(this.props.amount).fill(1) };
  }

  render(): React.ReactNode {
    const cardSceleton = this.state.loadCards.map((_, i) => {
      return (
        <div className="card-item" key={i}>
          <div className="card-title">
            <Skeleton count={1} />
          </div>
          <div className="card-desc">
            <Skeleton count={2} />
          </div>
        </div>
      );
    });
    return <div className="card-sceleton-wrapper">{cardSceleton}</div>;
  }
}
export default CardSkeleton;
