import React from "react";
import Card from "./components/Card/card";
import Header from "./components/Header/header";

const App = () => {
  const myCards = [
    { title: "Zafar", description: "This is my names", btn: "Next" },
    { title: "Jafar", description: "This is my names", btn: "Forward" },
    { title: "Mubashir", description: "This is my names", btn: "Forward" },
    { title: "Zain", description: "This is my names", btn: "Forward" },
    { title: "Sulema", description: "This is my names", btn: "Forward" },
  ];
  return (
    <>
      <Header />{" "}
      {myCards.map((card, index) => {
        return (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            btn={card.btn}
          />
        );
      })}
    </>
  );
};

export default App;
