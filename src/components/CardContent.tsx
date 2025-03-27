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

  const highlightAndSpeak = () => {
    setTimeout(() => {
      highlightAndSpeakWord();
      let index = 0;
      const interval = setInterval(() => {
        if (index < word.length) {
          highlightAndSpeakLetter(index, word);
          index++;
        } else if (index === word.length) {
          highlightAndSpeakWord();
          index++;
        } else {
          clearInterval(interval);
        }
      }, 1000);
    }, 1000);
  };

  useEffect(() => {
    if (cardSide === "back") {
      highlightAndSpeak();
    }
  }, [cardSide]);

  return (
    <div className="card-content">
      <div className="card-image">
        <img src={imageUrl} alt={word} />
      </div>
      <div
        className="card-word"
        dangerouslySetInnerHTML={{ __html: renderedWord }}
      />
    </div>
  );
};

export default CardContent;
