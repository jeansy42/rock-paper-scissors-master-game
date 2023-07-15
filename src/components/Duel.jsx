import { useGlobalContext } from "../context/useGlobalContext";
import "../assets/styles/Duel.scss";
import ArmCard from "./ArmCard";
import Result from "./Result";

function Duel() {
  const { userArmSelected, houseArmSelected, result, win } = useGlobalContext();
  return (
    <div className={"duel_container"}>
      <div className={`picked user ${win === "userWin" ? "winner" : ""}`}>
        <span>YOU PICKED</span>
        <ArmCard arm={userArmSelected} />
      </div>
      {result ? <Result /> : null}
      <div className={`picked house ${win === "houseWin" ? "winner" : ""}`}>
        <span> THE HOUSE PICKED</span>
        {houseArmSelected ? 
          <ArmCard arm={houseArmSelected} />
        : 
          <div className="backfont"></div>
        }
      </div>
    </div>
  );
}

export default Duel;
