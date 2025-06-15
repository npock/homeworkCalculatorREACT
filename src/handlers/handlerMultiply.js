export const handlerOperatorMultiply = ({
  setIsResult,
  operand2,
  operand1,
  setOperator,
}) => {
  setIsResult(false);
  if (operand2 === "" && operand1 !== "") {
    setOperator("*");
  }
};
