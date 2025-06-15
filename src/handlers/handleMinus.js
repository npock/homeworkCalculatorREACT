export const handlerOperatorMinus = ({
  setIsResult,
  operand2,
  operand1,
  setOperand1,
  setOperator,
}) => {
  setIsResult(false);
  if (operand2 === "") {
    if (operand1 === "") {
      setOperand1("-");
    } else {
      setOperator("-");
    }
  }
};
