import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const cardInfo = [
  {
    word: "CAT",
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY=",
  },
  {
    word: "DOG",
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY=",
  },
  {
    word: "FISH",
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=1024x1024&w=is&k=20&c=QaEkKC7lFEBrzzPftMRBVuOZq4FNOnUjOV1VqTmpMfY=",
  },
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
