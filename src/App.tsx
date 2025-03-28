import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const cardInfo = [
  {
    word: "CAT",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/cat.jpg",
  },
  {
    word: "DOG",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/dog.jpg",
  },
  {
    word: "FISH",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/fish.jpg",
  },
  {
    word: "BIRD",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/bird.jpg",
  },
  { word: "BAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/bat.jpg",
  },
  {
    word: "MOUSE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/mouse.jpg",
  },
  {
    word: "LION",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/lion.jpg",
  },
  {
    word: "PIG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/pig.jpg",
  },
  {
    word: "HEN",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/hen.jpg",
  },
  {
    word: "FOX",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/fox.jpg",
  },
  {
    word: "BOX",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/box.jpg",
  },
  {
    word: "GOAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/goat.jpg",
  },
  {
    word: "BOAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/boat.jpg",
  },
  {
    word: "BEAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/bear.jpg",
  },
  {
    word: "HAIR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/hair.jpg",
  },
  {
    word: "DUCK",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/duck.jpg",
  },
  {
    word: "TRUCK",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/truck.jpg",
  },
  {
    word: "STAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/star.jpg",
  },
  {
    word: "CAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/car.jpg",
  },
  {
    word: "MOON",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/moon.jpg",
  },
  {
    word: "SPOON",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/spoon.jpg",
  },
  {
    word: "BEE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/bee.jpg",
  },
  {
    word: "TREE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/tree.jpg",
  },
  {
    word: "FROG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/frog.jpg",
  },
  {
    word: "LOG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/src/assets/log.jpg",
  }
];
function App() {
  const [index, setIndex] = useState(0);
  return (
    <div>
      <Card key={index} cardInfo={cardInfo[index]} />
      <div className="card-buttons">
        {index > 0 && (
          <button className="card-button" onClick={() => setIndex(index - 1)}>
            Back
          </button>
        )}
        {index < cardInfo.length - 1 && (
          <button className="card-button" onClick={() => setIndex(index + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
