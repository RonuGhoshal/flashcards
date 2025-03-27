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
  {
    word: "BIRD",
    imageUrl:
      "https://media.istockphoto.com/id/626132614/photo/blue-fronted-redstart-the-beautiful-blue.jpg?s=612x612&w=0&k=20&c=V9ZpAJrnOPxgf9TiT3wxk77V2TbKqiXl_5yOBL1DP_c=",
  },
  { word: "BAT",
    imageUrl: "https://www.shutterstock.com/image-photo/bat-flying-isolated-on-white-600nw-2490998921.jpg",
  },
  {
    word: "MOUSE",
    imageUrl: "https://t3.ftcdn.net/jpg/07/66/01/40/360_F_766014094_RV83tf5oy9t8ejXfescEot8qDVjjHazl.jpg",
  },
  {
    word: "LION",
    imageUrl: "https://media.istockphoto.com/id/455700809/photo/lion-standing-panthera-leo-10-years-old-isolated-on-white.jpg?s=612x612&w=0&k=20&c=wQgwZwid0UZ08mLL8sS1c2TPYZFzaTz9Xe4SDtSkmQk=",
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
