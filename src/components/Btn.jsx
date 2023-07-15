import "../assets/styles/Btn.scss";
import { useGlobalContext } from "../context/useGlobalContext";

function Btn() {
  const { setShowRules } = useGlobalContext();
  const handleClick = () => setShowRules(true);
  return (
    <div className="btn_container">
      <button className="btn" onClick={handleClick}>
        RULES
      </button>
    </div>
  );
}

export default Btn;
