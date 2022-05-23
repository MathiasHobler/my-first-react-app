import React from "react";
import "./mainContent.css";
import { Card } from "../card/card";

const MainContent = () => {
  return (
    <main>
      <Card
        name="Rick Sanchez"
        imgURL="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        isBookmarked={false}
      ></Card>
      <Card
        name="Morty Smith"
        imgURL="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        isBookmarked={false}
      ></Card>
      <Card
        name="Summer Smith"
        imgURL="https://rickandmortyapi.com/api/character/avatar/3.jpeg"
        isBookmarked={true}
      ></Card>
      <Card
        name="Beth Smith"
        imgURL="https://rickandmortyapi.com/api/character/avatar/4.jpeg"
        isBookmarked={false}
      ></Card>
      <Card
        name="Jerry Smith"
        imgURL="https://rickandmortyapi.com/api/character/avatar/5.jpeg"
        isBookmarked={false}
      ></Card>
      <Card
        name="Abadango Cluster Princess"
        imgURL="https://rickandmortyapi.com/api/character/avatar/6.jpeg"
        isBookmarked={true}
      ></Card>
    </main>
  );
};

export default MainContent;

const arr = [
  {
    name: "Rick Sanchez",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    isBookmarked: false,
  },
  {
    name: "test",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    isBookmarked: false,
  },
];
