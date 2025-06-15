export const handlerOperatorResult = ({
  operator,
  operand2,
  operand1,
  setOperand1,
  setIsResult,
  setOperand2,
  setOperator,
}) => {
  if (operator === "+") {
    const total = Number(operand2) + Number(operand1);
    setOperand1(total);
  } else if (operator === "-") {
    const total = Number(operand1) - Number(operand2);
    setOperand1(total);
  } else if (operator === "*") {
    const total = Number(operand1) * Number(operand2);
    setOperand1(total);
  }
  setIsResult(true);
  setOperand2("");
  setOperator("");
};
