import { useEffect, useState } from "react";
import "./CardContent.css";

interface CardContentProps {
  imageUrl: string;
  word: string;
  cardSide: string;
}

const CardContent = ({ imageUrl, word, cardSide }: CardContentProps) => {
  const [renderedWord, setRenderedWord] = useState(word);

  const highlightAndSpeakWord = () => {
    setRenderedWord(`<span style="text-decoration: underline;">${word}</span>`);
    speechSynthesis.speak(new SpeechSynthesisUtterance(word.toLowerCase()));
  };

  const highlightAndSpeakLetter = (index: number, word: string) => {
    const beforeLetter = word.substring(0, index);
    const highlightedLetter = word.substring(index, index + 1);
    speechSynthesis.speak(
      new SpeechSynthesisUtterance(highlightedLetter.toLowerCase())
    );
    const afterLetter = word.substring(index + 1);
    setRenderedWord(
      `${beforeLetter}<span style="text-decoration: underline;">${highlightedLetter}</span>${afterLetter}`
    );
  };

  const highlightAndSpeak = (word: string) => {
    let index = 0;
    highlightAndSpeakWord();

    const intervalId = setInterval(() => {
      if (index < word.length) {
        highlightAndSpeakLetter(index, word);
        index++;
      } else if (index === word.length) {
        highlightAndSpeakWord();
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);

    return intervalId;
  };

  useEffect(() => {
    if (cardSide !== "back") return;

    let timeoutId: NodeJS.Timeout;
    let intervalId: NodeJS.Timeout;

    timeoutId = setTimeout(() => {
      intervalId = highlightAndSpeak(word);
    }, 1000);

    return () => {
      window.speechSynthesis.cancel();
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [cardSide, word]);

  return (
    <div className="card-content">
      <div className="card-image">
        <img 
          src={imageUrl} 
          alt={word} 
          className={cardSide === "front" ? "bounce-animation" : ""}
        />
      </div>
      <div
        className="card-word"
        dangerouslySetInnerHTML={{ __html: renderedWord }}
      />
    </div>
  );
};

export default CardContent;
