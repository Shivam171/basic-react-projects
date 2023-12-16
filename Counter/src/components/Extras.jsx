import styles from "./Extras.module.css";
import extraSound from "/public/discord-notify.mp3";

const Extras = ({ onReset, getCounterHistory }) => {
  // Function to render counter history from local storage
  const renderHistory = () => {
    const history = getCounterHistory();
    if (history.length === 0) {
      window.alert("Counter history is empty.");
    } else {
      // Sound for History
      const audioElement = new Audio(extraSound);
      audioElement.play();
      // History in alert
      const historyMessage = history
        .map((entry, index) => {
          return `${index + 1}. ${entry.action} by ${entry.value}`;
        })
        .join("\n");
      window.alert(`Counter History:\n${historyMessage}`);
    }
  };

  return (
    <div className={`extra_btn`}>
      <button onClick={onReset} className={`${styles.eRest} e_btn`}>
        Reset
      </button>
      <button onClick={renderHistory} className={`${styles.eHistory} e_btn`}>
        History
      </button>
    </div>
  );
};

export default Extras;
