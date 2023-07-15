import { useEffect } from "react";
import ArmCard from "./ArmCard";
import "../assets/styles/ArmOptions.scss";
import { useGlobalContext } from "../context/useGlobalContext";

function ArmOptions() {
  const { setWin } = useGlobalContext();
  useEffect(() => setWin(""), []);
  return (
    <div className="arm_options" role="contentinfo">
      <ArmCard arm={"rock"} />
      <ArmCard arm={"paper"} />
      <ArmCard arm={"scissors"} />
      <ArmCard arm={"lizard"} />
      <ArmCard arm={"spock"} />
    </div>
  );
}

export default ArmOptions;
