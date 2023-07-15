import { useEffect } from "react";
import "../assets/styles/Score.scss";
import { useGlobalContext } from "../context/useGlobalContext";

function Score() {
  const { score } = useGlobalContext();
  useEffect(() => {
    console.log(score);
  }, []);
  return (
    <div className="header" role="banner">
      <div className="options_container">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
        <span>LIZARD</span>
        <span>SPOCK</span>
      </div>
      <div className="score_container">
        <span>SCORE</span>
        <span>{score}</span>
      </div>
    </div>
  );
}

export default Score;
