import { useState } from "react";
import "./Card.css";
import CardContent from "./CardContent";

const Card = ({
  word = "CAT",
  imageUrl = "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY=",
}) => {
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
