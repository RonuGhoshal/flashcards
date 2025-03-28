import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const cardInfo = [
  {
    word: "CAT",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/cat.jpg",
  },
  {
    word: "DOG",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/dog.jpg",
  },
  {
    word: "FISH",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/fish.jpg",
  },
  {
    word: "BIRD",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/bird.jpg",
  },
  { word: "BAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/bat.jpg",
  },
  {
    word: "MOUSE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/mouse.jpg",
  },
  {
    word: "LION",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/lion.jpg",
  },
  {
    word: "PIG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/pig.jpg",
  },
  {
    word: "HEN",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/hen.jpg",
  },
  {
    word: "FOX",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/fox.jpg",
  },
  {
    word: "BOX",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/box.jpg",
  },
  {
    word: "GOAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/goat.jpg",
  },
  {
    word: "BOAT",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/boat.jpg",
  },
  {
    word: "BEAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/bear.jpg",
  },
  {
    word: "HAIR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/hair.jpg",
  },
  {
    word: "DUCK",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/duck.jpg",
  },
  {
    word: "TRUCK",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/truck.jpg",
  },
  {
    word: "STAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/star.jpg",
  },
  {
    word: "CAR",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/car.jpg",
  },
  {
    word: "MOON",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/moon.jpg",
  },
  {
    word: "SPOON",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/spoon.jpg",
  },
  {
    word: "BEE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/bee.jpg",
  },
  {
    word: "TREE",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/tree.jpg",
  },
  {
    word: "FROG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/frog.jpg",
  },
  {
    word: "LOG",
    imageUrl: "https://cdn.jsdelivr.net/gh/ronughoshal/flashcards/assets/log.jpg",
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
            Previous Card
          </button>
        )}
        {index < cardInfo.length - 1 && (
          <button className="card-button" onClick={() => setIndex(index + 1)}>
            Next Card
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
