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
  },
  {
    word: "PIG",
    imageUrl: "https://i.pinimg.com/736x/42/50/46/42504623ac2ada66512a9a84e1932e83.jpg",
  },
  {
    word: "HEN",
    imageUrl: "https://t3.ftcdn.net/jpg/03/14/64/00/360_F_314640055_Mg1VtyXwHATBCLEJmGHMHlXkAV1RdsXq.jpg",
  },
  {
    word: "FOX",
    imageUrl: "https://media.istockphoto.com/id/520847188/photo/red-fox-vulpes-vulpes-4-years-old-walking.jpg?s=612x612&w=0&k=20&c=F0LM-0Zod-K_Q4d0pqYRk4hkvOZmvRnV-doPvMvMFZo=",
  },
  {
    word: "BOX",
    imageUrl: "https://img.freepik.com/premium-vector/empty-cardboard-box-opened-isolated-white-background-vector-illustration_939711-2035.jpg",
  },
  {
    word: "GOAT",
    imageUrl: "https://media.istockphoto.com/id/1403864036/photo/white-little-goat-isolated-goat-on-white-background.jpg?s=612x612&w=0&k=20&c=sT0sOV0Dd8VbzNKRFio226qqJgRxR09QeY1dn6oXHKE=",
  },
  {
    word: "BOAT",
    imageUrl: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/luxury-yacht-isolated-on-white-background-goce-risteski.jpg",
  },
  {
    word: "BEAR",
    imageUrl: "https://media.istockphoto.com/id/106430075/photo/front-view-of-brown-bear-8-years-old-sitting.jpg?s=612x612&w=0&k=20&c=i70bDuEJ-AHe1lhecTyY7Vs-N5llrcoLklcWPg6dgvc=",
  },
  {
    word: "HAIR",
    imageUrl: "https://media.istockphoto.com/id/1141866980/photo/very-disheveled-brown-hair-isolated-on-white-background-bad-hair-day-clipart-back-view.jpg?s=612x612&w=0&k=20&c=rPzslv7n_9FWNgRU9RQ1ApQPWExDC2ULaxVB9EhI8BM=",
  },
  {
    word: "DUCK",
    imageUrl: "https://classroomclipart.com/image/static7/preview2/photo-mallard-duck-isolated-on-white-background-61273.jpg",
  },
  {
    word: "TRUCK",
    imageUrl: "https://t3.ftcdn.net/jpg/06/65/76/14/360_F_665761421_abQOij6jUloZqzlNugQ1l8cE4zyAheyj.jpg",
  },
  {
    word: "STAR",
    imageUrl: "https://img.freepik.com/premium-vector/yellow-star-white-background_275806-58.jpg",
  },
  {
    word: "CAR",
    imageUrl: "https://media.istockphoto.com/id/1150425295/photo/3d-illustration-of-generic-hatchback-car-perspective-view.jpg?s=612x612&w=0&k=20&c=vws8oDFjcfGpqNAybWPxsA9XROdcBh2MXW2PGEDgk-8=",
  },
  {
    word: "MOON",
    imageUrl: "https://img.freepik.com/premium-photo/cartoon-style-crescent-moon-white-background-ar-169-v-6-job-id-0c62e903daa842859046883be11d32be_1134901-378584.jpg",
  },
  {
    word: "SPOON",
    imageUrl: "https://media.istockphoto.com/id/462407175/photo/spoon.jpg?s=612x612&w=0&k=20&c=Uq8jB6rPNXdXDcWsew17-ZsqpfFsV9y_JV-Wu385mz8=",
  },
  {
    word: "BEE",
    imageUrl: "https://media.istockphoto.com/id/1396407304/photo/insects-of-europe-bees-side-view-macro-of-western-honey-bee-isolated-on-white-background-with.jpg?s=612x612&w=0&k=20&c=CznXV-eUnw9wH728XB7DvTanssBmCPBrQSCB2p7pnuE=",
  },
  {
    word: "TREE",
    imageUrl: "https://t4.ftcdn.net/jpg/04/33/21/31/360_F_433213121_z1GrXuPQ1PvIMFCqDG2ks8SCXX8SFb55.jpg",
  },
  {
    word: "FROG",
    imageUrl: "https://media.istockphoto.com/id/175397603/photo/frog.jpg?s=612x612&w=0&k=20&c=EMXlwg5SicJllr7gnSFUUjzwCGa1ciLjYD1bk8NvO2E=",
  },
  {
    word: "LOG",
    imageUrl: "https://t3.ftcdn.net/jpg/10/27/81/48/360_F_1027814844_5ROkDNzO0LGJgZ191i4pxhJmSUbN3ZrA.jpg",
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
