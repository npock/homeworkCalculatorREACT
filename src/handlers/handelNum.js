export const handlerNumButtonClick = (
  {
    setIsResult,
    isResult,
    setOperand1,
    operator,
    operand1,
    operand2,
    setOperand2,
  },
  label
) => {
  setIsResult(false);
  if (isResult) {
    setOperand1(label);
  } else if (operator === "") {
    setOperand1(operand1 + label);
  } else if (operator !== "") {
    setOperand2(operand2 + label);
  }
  if (operand1 === "0") {
    setOperand1(label);
  } else if (operand2 === "0") {
    setOperand2(label);
  }
};
