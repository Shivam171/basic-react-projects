import styles from "./Calculator.module.css";
import { useState } from "react";

const Calculator = () => {
  const [prevValue, setPrevValue] = useState(0);
  const [nextValue, setNextValue] = useState("");
  const [op, setOp] = useState(null);

  // useEffect(() => {
  //   if (op === "+") {
  //     setNextValue(String(prevValue + Number(nextValue)));
  //   }
  // });

  const handleOperation = () => {};
  return (
    <div>
      <div className={styles.heading}>
        <h1>Calculator</h1>
      </div>

      <div className={styles.calculator}>
        <input type="text" className={styles.screen} placeholder={0} readOnly />
        <div className={styles.keys}>
          <div className={styles.operators}>
            <button
              name="clear"
              value={0}
              onClick={handleOperation}
              className={`${styles.clear} op_btn`}
            >
              C
            </button>
            <button
              name="divide"
              onClick={handleOperation}
              className={`${styles.divide} op_btn`}
            >
              /
            </button>
            <button
              name="mul"
              onClick={handleOperation}
              className={`${styles.mul} op_btn`}
            >
              X
            </button>
            <button
              name="sub"
              onClick={handleOperation}
              className={`${styles.sub} op_btn`}
            >
              -
            </button>
          </div>
          <div className={styles.numbers}>
            <div className={styles.org_num}>
              <button
                name="1"
                value={1}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                1
              </button>
              <button
                name="2"
                value={2}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                2
              </button>
              <button
                name="3"
                value={3}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                3
              </button>
              <button
                name="add"
                onClick={handleOperation}
                className={`${styles.add} op_btn`}
              >
                +
              </button>
            </div>
            <div className={styles.org_num}>
              <button
                name="4"
                value={4}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                4
              </button>
              <button
                name="5"
                value={5}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                5
              </button>
              <button
                name="6"
                value={6}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                6
              </button>
            </div>
            <button
              name="percent"
              onClick={handleOperation}
              className={`${styles.percent} op_btn`}
            >
              %
            </button>
            <button
              name="dot"
              onClick={handleOperation}
              className={`${styles.dot} op_btn`}
            >
              .
            </button>
            <div className={styles.org_num}>
              <button
                name="7"
                value={7}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                7
              </button>
              <button
                name="8"
                value={8}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                8
              </button>
              <button
                name="9"
                value={9}
                onClick={handleOperation}
                className={`${styles.num_btn} op_btn`}
              >
                9
              </button>
            </div>
            <button name="eq" onClick={handleOperation} className={styles.eq}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
