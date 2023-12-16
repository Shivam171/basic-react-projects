import { useState } from "react";
import styles from "./Counter.module.css";
import incrementSound from "/public/click2.wav";
import decrementSound from "/public/click.wav";
import extraSound from "/public/discord-notify.mp3";
import Extras from "/src/components/Extras";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [minValue, setMinValue] = useState(-10); // Minimum Value is -10
  const [maxValue, setMaxValue] = useState(10); // Maximum Value is 10

  const handleIncrement = () => {
    if (count < maxValue) {
      setCount(count + 1);
      const audioElement = new Audio(incrementSound);
      audioElement.play();

      // Record the increment in history
      const history = getCounterHistory();
      history.push({ action: "increment", value: count + 1 });
      saveCounterHistory(history);
    } else {
      window.alert("Maximum value reached!");
    }
  };

  const handleDecrement = () => {
    if (count > minValue) {
      setCount(count - 1);
      const audioElement = new Audio(decrementSound);
      audioElement.play();

      // Record the decrement in history
      const history = getCounterHistory();
      history.push({ action: "decrement", value: count - 1 });
      saveCounterHistory(history);
    } else {
      window.alert("Minimum value reached!");
    }
  };

  const handleReset = () => {
    setCount(0);
    playSound(extraSound);
    // Record the reset in history
    const history = getCounterHistory();
    history.push({ action: "reset", value: 0 });
    saveCounterHistory(history);
  };

  // Function to play sound with check to prevent multiple playback
  const playSound = (audioSrc) => {
    if (!isPlaying) {
      const audioElement = new Audio(audioSrc);
      audioElement.play();
      setIsPlaying(true);
      audioElement.onended = () => {
        setIsPlaying(false);
      };
    }
  };

  // Function to save counter history to local storage
  const saveCounterHistory = (history) => {
    localStorage.setItem("counterHistory", JSON.stringify(history));
  };

  // Function to get counter history from local storage
  const getCounterHistory = () => {
    const history = localStorage.getItem("counterHistory");
    return history ? JSON.parse(history) : [];
  };

  return (
    <>
      <div className={styles.container}>
        <h1>{count}</h1>
        <div className={styles.all_btn}>
          <button
            onClick={handleIncrement}
            className={`${styles.btn_green} btn`}
          >
            +
          </button>
          <button onClick={handleDecrement} className={`${styles.btn_red} btn`}>
            -
          </button>
        </div>
      </div>
      {/* Passed the handleReset function as a prop */}
      <Extras onReset={handleReset} getCounterHistory={getCounterHistory} />
    </>
  );
};

export default Counter;
