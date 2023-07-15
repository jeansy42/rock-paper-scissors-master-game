import "../assets/styles/Rules.scss";
import { useGlobalContext } from "../context/useGlobalContext";

function Rules() {
  const { setShowRules } = useGlobalContext();
  const handleClick = () => setShowRules(false);
  return (
    <div className="rules_modal">
      <div className="rules_container">
        <div className="rules_header">
          <span>RULES</span>
          <span className="close" onClick={handleClick}></span>
        </div>
        <div className="rules_auxiliar">
          <div className="rules"></div>
        </div>
      </div>
    </div>
  );
}

export default Rules;
