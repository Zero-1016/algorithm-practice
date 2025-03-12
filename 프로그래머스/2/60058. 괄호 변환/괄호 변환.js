const changeArray = (v, u) => {
  let string = "(" + v.join("") + ")";
  let copyU = [...u];
  copyU.shift();
  copyU.pop();

  let uString = copyU
    .join("")
    .replace(/\(/g, "temp")
    .replace(/\)/g, "(")
    .replace(/temp/g, ")");

  return string + uString;
};

function isCorrect(str) {
  let stack = [];
  for (let ch of str) {
    if (ch === "(") stack.push(ch);
    else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

function solution(p) {
  if (p === "") return "";

  let leftCount = 0,
    rightCount = 0;
  let u = "",
    v = "";

  for (let i = 0; i < p.length; i++) {
    p[i] === "(" ? leftCount++ : rightCount++;

    if (leftCount === rightCount) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    return (
      "(" +
      solution(v) +
      ")" +
      u
        .slice(1, -1)
        .split("")
        .map((ch) => (ch === "(" ? ")" : "("))
        .join("")
    );
  }
}