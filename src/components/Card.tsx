import { useState } from "react";
import "./Card.css";
import CardContent from "./CardContent";

const Card = ({
  cardInfo
}) => {
  const { word, imageUrl } = cardInfo;
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleClick}>
      <div className="card-front">
        {!isFlipped && <CardContent cardSide="front" word={word} imageUrl={imageUrl} />}
      </div>
      <div className="card-back">
        {isFlipped && <CardContent cardSide="back" word={word} imageUrl={imageUrl} />}
      </div>
    </div>
  );
};

export default Card;
