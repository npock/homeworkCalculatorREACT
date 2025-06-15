import { useState } from "react";
import { getButtons } from "./getButtons";
import "./App.css";

export const App = () => {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [isResult, setIsResult] = useState(false);

  const state = {
    operand1,
    setOperand1,
    operator,
    setOperator,
    operand2,
    setOperand2,
    isResult,
    setIsResult,
  };

  const buttons = getButtons(state);

  return (
    <>
      <div className={"screen " + (isResult ? "red" : "")}>
        {operand1 + operator + operand2}
      </div>
      <div className="operators">
        {buttons.map(({ id, label, group, handler }) =>
          group === "operators" ? (
            <button key={id} className="operator" onClick={handler}>
              {label}
            </button>
          ) : null
        )}
      </div>
      <div className="buttons">
        {buttons.map(({ id, label, group, handler }) =>
          group === "nums" ? (
            <button key={id} className="button" onClick={() => handler(label)}>
              {label}
            </button>
          ) : null
        )}
      </div>
    </>
  );
};
