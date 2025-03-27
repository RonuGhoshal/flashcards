import { useEffect } from "react";
import "./CardContent.css";

const CardContent = ({ imageUrl, word, cardSide }) => {
  useEffect(() => {
    if (cardSide === "back") {
      let index = 0;
      const interval = setInterval(() => {
        if (index < word.length) {
          const beforeLetter = word.substring(0, index);
          const highlightedLetter = word.substring(index, index + 1);
          const afterLetter = word.substring(index + 1);
          document.querySelector(
            ".card-word"
          ).innerHTML = `${beforeLetter}<span style="text-decoration: underline;">${highlightedLetter}</span>${afterLetter}`;
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }
  }, [cardSide]);

  return (
    <div className="card-content">
      <div className="card-image">
        <img src={imageUrl} alt={word} />
      </div>
      <div className="card-word">{word}</div>
    </div>
  );
};

export default CardContent;
