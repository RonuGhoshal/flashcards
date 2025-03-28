import { useState } from "react";
import "./Card.css";
import CardContent from "./CardContent";

const QUESTION_IMAGE = "https://png.pngtree.com/png-vector/20240804/ourmid/pngtree-blue-question-mark-png-image_13375270.png"

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
        {!isFlipped && <CardContent cardSide="front" word={word} imageUrl={QUESTION_IMAGE} />}
      </div>
      <div className="card-back">
        {isFlipped && <CardContent cardSide="back" word={word} imageUrl={imageUrl} />}
      </div>
    </div>
  );
};

export default Card;
