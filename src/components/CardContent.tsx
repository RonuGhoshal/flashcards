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
    console.log(`speaking word ${word}`);
    speechSynthesis.speak(new SpeechSynthesisUtterance(word.toLowerCase()));
  };

  const highlightAndSpeakLetter = (index: number, word: string) => {
    console.log(`highlighting and speaking letter ${word[index]}`);
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
    let intervalId: NodeJS.Timeout;
    let timeoutId: NodeJS.Timeout;

    if (cardSide === "back") {
      timeoutId = setTimeout(() => {
        highlightAndSpeakWord();
        let index = 0;
        intervalId = setInterval(() => {
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
      }, 1000);
    }

    // Cleanup function to cancel speech and clear intervals
    return () => {
      window.speechSynthesis.cancel();
      if (timeoutId) clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [cardSide, word]);

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
