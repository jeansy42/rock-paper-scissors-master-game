import { useGlobalContext } from "../context/useGlobalContext";

function ArmCard({ arm }) {
  const { setUserArmSelected, userArmSelected } = useGlobalContext();
  const handleClick = () => {
    if (!userArmSelected) setUserArmSelected(arm);
  };

  return (
    <div
      className={`auxiliar auxiliar_${arm} ${userArmSelected ? "active" : ""} `}
    >
      <div className={`${arm}_ex exterior_icon`} onClick={handleClick}>
        <div className="icon_container">
          <div className={`${arm} icon`}></div>
        </div>
      </div>
    </div>
  );
}

export default ArmCard;
