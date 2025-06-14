import { useState } from "react";
import "./App.css";

const ButtonClickOperands = ({
  item,
  setOperand1,
  setOperand2,
  operand1,
  operand2,
  operator,
  setShowRedTotal,
  showRedTotal,
}) => {
  const buttonClick = () => {
    if (showRedTotal) {
      setOperand1(item);
      setShowRedTotal(false);
    } else if (operator === "") {
      setOperand1(operand1 + item);
    } else if (operator !== "") {
      setOperand2(operand2 + item);
    }
    if (operand1 === "0") {
      setOperand1(item);
    } else if (operand2 === "0") {
      setOperand2(item);
    }
  };
  return (
    <button className="button" onClick={buttonClick}>
      {item}
    </button>
  );
};

const OperatorsClickBottons = ({
  item,
  operator,
  setOperator,
  setOperand1,
  setOperand2,
  operand2,
  operand1,
  setShowRedTotal,
}) => {
  const operatorsButtonClick = () => {
    setShowRedTotal(false);
    if (item === "C") {
      setOperand1("");
      setOperator("");
      setOperand2("");
    } else if (item === "=") {
      if (operator === "+") {
        const total = Number(operand2) + Number(operand1);
        setOperand1(total);
      } else if (operator === "-") {
        const total = Number(operand1) - Number(operand2);
        setOperand1(total);
      }
      setShowRedTotal(true);
      setOperand2("");
      setOperator("");
    } else if (operand2 === "" && operand1 !== "") {
      setOperator(item);
    }
  };
  return (
    <button className="buttonOperand" onClick={operatorsButtonClick}>
      {item}
    </button>
  );
};

function App() {
  const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  const operators = ["+", "-", "=", "C"];
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [showRedTotal, setShowRedTotal] = useState(false);
  return (
    <>
      <div className={showRedTotal ? "screenRed" : "screen"}>
        {operand1 + operator + operand2}
      </div>
      <div className="operands">
        {operators.map((item) => (
          <OperatorsClickBottons
            item={item}
            operator={operator}
            setOperator={setOperator}
            operand1={operand1}
            setOperand1={setOperand1}
            operand2={operand2}
            setOperand2={setOperand2}
            setShowRedTotal={setShowRedTotal}
          />
        ))}
      </div>
      <div className="buttons">
        {nums.map((item) => (
          <ButtonClickOperands
            item={item}
            setOperand1={setOperand1}
            setOperand2={setOperand2}
            operand1={operand1}
            operand2={operand2}
            operator={operator}
            setShowRedTotal={setShowRedTotal}
            showRedTotal={showRedTotal}
          />
        ))}
      </div>
    </>
  );
}

export default App;
