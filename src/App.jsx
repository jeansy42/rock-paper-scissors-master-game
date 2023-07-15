import { useState, useEffect } from "react";
import "./assets/styles/App.scss";
import { GlobalContext } from "./context/GlobalContext";
import Score from "./components/Score";
import ArmOptions from "./components/ArmOptions";
import Duel from "./components/Duel";
import Rules from "./components/Rules";
import Btn from "./components/Btn";

function App() {
  const [win, setWin] = useState("false");
  const [showRules, setShowRules] = useState(false);
  const [score, setScore] = useState(0);
  const [result, setResult] = useState("");
  const [userArmSelected, setUserArmSelected] = useState("");
  const [houseArmSelected, setHouseArmSelected] = useState("");

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };
  const houseSelection = () => {
    let random = Math.floor(Math.random() * 5);
    setHouseArmSelected(arms[random]);
    console.log(houseArmSelected);
  };

  const duel = () => {
    if (userArmSelected === "rock") {
      if (houseArmSelected === "scissors" || houseArmSelected === "lizard") {
        setResult("YOU WIN");
        setWin("userWin");
        setScore((prev) => prev + 1);
      } else if (userArmSelected === houseArmSelected) setResult(" DRAW");
      else {
        setResult("YOU LOSE");
        setWin("houseWin");
        setScore((prev) => prev - 1);
      }
    } else if (userArmSelected === "paper") {
      if (houseArmSelected === "rock" || houseArmSelected === "spock") {
        setResult("YOU WIN");
        setWin("userWin");
        setScore((prev) => prev + 1);
      } else if (userArmSelected === houseArmSelected) setResult(" DRAW");
      else {
        setResult("YOU LOSE");
        setWin("houseWin");
        setScore((prev) => prev - 1);
      }
    } else if (userArmSelected === "scissors") {
      if (houseArmSelected === "paper" || houseArmSelected === "lizard") {
        setResult("YOU WIN");
        setWin("userWin");
        setScore((prev) => prev + 1);
      } else if (userArmSelected === houseArmSelected) setResult(" DRAW");
      else {
        setResult("YOU LOSE");
        setWin("houseWin");
        setScore((prev) => prev - 1);
      }
    } else if (userArmSelected === "lizard") {
      if (houseArmSelected === "spock" || houseArmSelected === "paper") {
        setResult("YOU WIN");
        setWin("userWin");
        setScore((prev) => prev + 1);
      } else if (userArmSelected === houseArmSelected) setResult(" DRAW");
      else {
        setResult("YOU LOSE");
        setWin("houseWin");
        setScore((prev) => prev - 1);
      }
    } else if (userArmSelected === "spock") {
      if (houseArmSelected === "scissors" || houseArmSelected === "rock") {
        setResult("YOU WIN");
        setWin("userWin");
        setScore((prev) => prev + 1);
      } else if (userArmSelected === houseArmSelected) setResult(" DRAW");
      else {
        setResult("YOU LOSE");
        setWin("houseWin");
        setScore((prev) => prev - 1);
      }
    }
  };

  const runHouseSelection = async () => {
    await sleep(2000);
    houseSelection();
  };
  const runDuel = async () => {
    await sleep(1000);
    duel();
  };
  useEffect(() => {
    if (userArmSelected !== "") {
      runHouseSelection();
    }
  }, [userArmSelected]);
  useEffect(() => {
    if (houseArmSelected !== "") {
      runDuel();
    }
  }, [houseArmSelected]);

  return (
    <>
      <GlobalContext.Provider
        value={{
          score,
          setScore,
          userArmSelected,
          setUserArmSelected,
          houseArmSelected,
          setHouseArmSelected,
          result,
          setResult,
          showRules,
          setShowRules,
          setWin,
          win,
        }}
      >
        <Score />
        {userArmSelected ? <Duel /> : <ArmOptions />}
        {showRules ? <Rules /> : null}
        <Btn />
      </GlobalContext.Provider>
    </>
  );
}

const arms = ["rock", "paper", "scissors", "lizard", "spock"];

export default App;
