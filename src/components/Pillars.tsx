import { useCardContext } from "../context/CardContext";
import "../styles/Support.css";

function Pillars() {
  const { selectedCardName } = useCardContext();
  return (
    <div className="pillar">
      <div className="container">
        <h1 className="text-center">Card Details</h1>
        {selectedCardName ? (
          <div>
            <h2 className="text-center">
              {" "}
              Welcome To : {"   "}
              {selectedCardName}
            </h2>
          </div>
        ) : (
          <p className="text-center">No card selected</p>
        )}
      </div>
    </div>
  );
}

export default Pillars;
