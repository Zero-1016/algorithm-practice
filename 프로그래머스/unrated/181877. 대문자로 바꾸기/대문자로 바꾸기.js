function solution(myString) {
    return myString.split("").map(v => v.charCodeAt() > 95 ? String.fromCharCode(v.charCodeAt()-32) : v).join("");
}