import { useState } from "react";

import Header from "./components/Header";
import Summary from "./components/Summary";
import Main from "./components/Main";
import Pledge from "./components/Pledge";
import Modal from "./components/Modal";
import PledgeRadio from "./components/PledgeRadio";
import ThankYou from "./components/ThankYou";
import NavBar from "./components/NavBar"

// @todo menu bar

const initialPledgeLevels = [
  {
    title: "Pledge with no reward",
    pledge: "na", // not used
    description:
      "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.",
    numRemaining: -1, // not used
    minPledge: 0,
  },
  {
    title: "Bamboo Stand",
    pledge: "Pledge $25 or more",
    description:
      "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    numRemaining: 101,
    minPledge: 25,
  },
  {
    title: "Black Edition Stand",
    pledge: "Pledge $75 or more",
    description:
      "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer        member list. Shipping is included.",
    numRemaining: 64,
    minPledge: 75,
  },
  {
    title: "Mohogany Special Edition",
    pledge: "Pledge $200 or more",
    description:
      "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    numRemaining: 0,
    minPledge: 200,
  },
];

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth' // for smoothly scrolling
  });
};

function App(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [currPledgeTitle, setCurrPledgeTitle] = useState("");
  const [totalPledgeAmount, setTotalPledgeAmount] = useState(89914);
  const [totalBackers, setTotalBackers] = useState(5007);
  const [pledgeLevels, setPledgeLevels] = useState(initialPledgeLevels);
  const [showThankModal, setShowThankModal] = useState(false);

  function updateNumRemaining() {
    // need to make a new array; do not mutate state array
    // find element to clone and edit
    const elementCopy = structuredClone(
      pledgeLevels.filter((pl) => pl.title === currPledgeTitle)
    );
    if (elementCopy[0].numRemaining > 0) {
      // don't subtract from 'pledge with no reward'
      elementCopy[0].numRemaining -= 1;
      // find index of element to cut
      const elementIndex = pledgeLevels.findIndex(
        (pl) => pl.title === currPledgeTitle
      );

      // make new array with head + edited element + tail
      const newArray = pledgeLevels
        .slice(0, elementIndex)
        .concat(elementCopy)
        .concat(pledgeLevels.slice(elementIndex + 1));

      // update state
      setPledgeLevels(newArray);
    }
  }

  function onSelectReward(title: string) {
    setCurrPledgeTitle(title);
    setShowModal(true);
  }

  function onBackThisProject() {
    setCurrPledgeTitle(""); // reset so that next time modal opens, no radio is selected
    setShowModal(true);
    scrollToTop();
  }

  function handlePledge(amount: number) {
    setTotalPledgeAmount(totalPledgeAmount + amount);
    setTotalBackers(totalBackers + 1);
    updateNumRemaining();
    setShowModal(false);
    setCurrPledgeTitle(""); // reset so that next time modal opens, no radio is selected
    setShowThankModal(true); // show thank you modal since pledge was made
    scrollToTop(); // scroll to top to show thank You message
  }
  

  return (
    <>
      <div className="hero">
        <NavBar></NavBar>
      </div>
      <Header onBackThisProject={onBackThisProject}></Header>
      <Summary
        totalPledgeAmount={totalPledgeAmount}
        totalBackers={totalBackers}
      ></Summary>
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

      {showModal && (
        <Modal
          onClose={() => {
            setShowModal(false);
          }}
        >
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor
            Riser out in the world?
          </p>
          {pledgeLevels.map((pl) => {
            return (                
              <PledgeRadio
                key={pl.title}
                title={pl.title}
                pledge={pl.pledge}
                description={pl.description}
                numRemaining={pl.numRemaining}
                selected={currPledgeTitle === pl.title}
                onSelect={(s) => {
                  setCurrPledgeTitle(s);
                }}
                onPledge={(n) => handlePledge(n)}
                minPledge={pl.minPledge}
              />
            );
          })}
        </Modal>
      )}
      {showThankModal && (
        <Modal
          onClose={() => {
            setShowThankModal(false);
          }}
          showTitleBar={false}
          narrow={true}
        >
          <ThankYou
            onClose={() => {
              setShowThankModal(false);
            }}
          />
        </Modal>
      )}
    </>
  );
}

export default App;
