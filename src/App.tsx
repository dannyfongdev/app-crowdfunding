import React from "react";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Main from "./components/Main";
import Pledge from "./components/Pledge";

function App() {
  const pledgeLevels = [
    {
      title: "Bamboo Stand",
      pledge: "Pledge $25 or more",
      description:
        "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
      numRemaining: 101,
    },
    {
      title: "Black Edition Stand",
      pledge: "Pledge $75 or more",
      description:
        "YYou get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer        member list. Shipping is included.",
      numRemaining: 64,
    },
    {
      title: "Mohogany Special Edition",
      pledge: "Pledge $200 or more",
      description:
        "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
      numRemaining: 0,
    },
  ];

  const onSelectReward = () => {
    console.log("select reward clicked");
  };

  return (
    <>
      <div className="hero"></div>
      <Header></Header>
      <Summary></Summary>
      <Main>
        {pledgeLevels.map((pl) => {
          return (
            <Pledge
              key={pl.title}
              title={pl.title}
              pledge={pl.pledge}
              description={pl.description}
              numRemaining={pl.numRemaining}
              onSelectReward={onSelectReward}
            />
          );
        })}
      </Main>
    </>
  );
}

export default App;
