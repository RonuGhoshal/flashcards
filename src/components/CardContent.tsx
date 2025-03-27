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
          speechSynthesis.speak(
            new SpeechSynthesisUtterance(highlightedLetter.toLowerCase())
          );
          const afterLetter = word.substring(index + 1);
          document.querySelector(
            ".card-word"
          ).innerHTML = `${beforeLetter}<span style="text-decoration: underline;">${highlightedLetter}</span>${afterLetter}`;
          index++;
        } else if (index === word.length) {
          document.querySelector(
            ".card-word"
          ).innerHTML = `<span style="text-decoration: underline;">${word}</span>`;
          speechSynthesis.speak(
            new SpeechSynthesisUtterance(word.toLowerCase())
          );
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
