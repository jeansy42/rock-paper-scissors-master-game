import { useGlobalContext } from "../context/useGlobalContext";

function Result() {
  const { result, setResult, setUserArmSelected, setHouseArmSelected } =
    useGlobalContext();
  const handleClick = () => {
    setResult("");
    setUserArmSelected("");
    setHouseArmSelected("");
  };
  return (
    <div className="result">
      <span>{result}</span>
      <button className="btn" onClick={handleClick}>PLAY AGAIN</button>
    </div>
  );
}

export default Result;
