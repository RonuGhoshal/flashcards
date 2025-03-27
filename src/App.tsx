import Card from "./components/Card";
import "./App.css";
import { useState } from "react";

const cardInfo = [
  {
    word: "CAT",
    imageUrl:
      "https://media.istockphoto.com/id/1443562748/photo/cute-ginger-cat.jpg?s=612x612&w=0&k=20&c=vvM97wWz-hMj7DLzfpYRmY2VswTqcFEKkC437hxm3Cg=",
  },
  {
    word: "DOG",
    imageUrl:
      "https://img.freepik.com/premium-photo/cute-golden-retriver-puppy-white-background_104627-3055.jpg",
  },
  {
    word: "FISH",
    imageUrl:
      "https://thumbs.dreamstime.com/b/gold-fish-white-background-25937234.jpg",
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
