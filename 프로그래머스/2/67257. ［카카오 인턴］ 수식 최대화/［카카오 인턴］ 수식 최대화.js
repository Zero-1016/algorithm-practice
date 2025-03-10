function operatorSort(operators) {
  const sort = [];

  operators.forEach((val) => {
    const firstNum = val;
    const secendNum = operators.filter((firstNum1) => firstNum1 !== firstNum);
    switch (secendNum.length) {
      case 2:
        sort.push([val, secendNum[0], secendNum[1]]);
        sort.push([val, secendNum[1], secendNum[0]]);
        break;
      case 1:
        sort.push([val, secendNum[0]]);
        break;
      case 0:
        sort.push([val]);
        break;
      default:
        throw new Error("ERROR");
    }
  });

  return sort;
}

function solution(expression) {
  const answer = [];
  const numbers = expression.split(/[*+-]/);
  const operators = expression.match(/[*+-]/g);

  const checkOperators = operatorSort([...new Set(operators)]);

  checkOperators.forEach((checkOperator) => {
    let copyNumbers = [...numbers];
    let copyOperators = [...operators];
    let temp = true;
    let checkIndex = 0;
    while (temp) {
      const check = copyOperators.findIndex(
        (val) => val === checkOperator[checkIndex]
      );
      if (check === -1) {
        if (checkIndex < checkOperator.length) {
          checkIndex++;
        } else {
          answer.push(copyNumbers[0]);
          temp = false;
        }
      } else {
        copyNumbers[check] = eval(
          `${copyNumbers[check]}${checkOperator[checkIndex]}${
            copyNumbers[check + 1]
          }`
        );

        copyNumbers.splice(check + 1, 1);
        copyOperators.splice(check, 1);
      }
    }
  });

  return Math.max(...answer.map(Math.abs));
}