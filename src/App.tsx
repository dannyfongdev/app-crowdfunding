import { useState } from "react";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Main from "./components/Main";
import Pledge from "./components/Pledge";
import Modal from "./components/Modal";
import PledgeRadio from "./components/PledgeRadio";

function App(): JSX.Element {
  const [ showModal, setShowModal ] = useState(false);
  const [ currPledge, setCurrPledge ] = useState('');

  const pledgeLevels = [
    {
      title: "Pledge with no reward",
      pledge: "na", // not used
      description:
        "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
      numRemaining: -1, // not used
    },
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
        "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer        member list. Shipping is included.",
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

  const onSelectReward = (reward: string) => {
    console.log("select reward clicked", reward);
    setShowModal(true);
  };

  const onBackThisProject = () => {
    setShowModal(true);
  }

  return (
    <>
      <div className="hero"></div>
      <Header onBackThisProject={ onBackThisProject }></Header>
      <Summary></Summary>
      <Main>
        {pledgeLevels
          .filter((pl) => pl.numRemaining !== -1) // -1 is for "Pledge with no reward", which does not need to be shown here. It is shown in the modal as an "option"
          .map((pl) => {
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

      { showModal && (
        <Modal onClose={() => {setShowModal(false)}}>
          {pledgeLevels.map((pl) => {
            return (
              <PledgeRadio
                key={pl.title}
                title={pl.title}
                pledge={pl.pledge}
                description={pl.description}
                numRemaining={pl.numRemaining}
              />
            );
          })}
        </Modal>
      )}
    </>
  );
}

export default App;
