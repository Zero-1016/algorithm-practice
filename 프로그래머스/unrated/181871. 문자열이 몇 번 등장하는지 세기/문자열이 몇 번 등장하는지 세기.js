function solution(myString, pat) {
    return [...myString].filter((val, ind) => myString.substring(ind, myString.length).startsWith(pat)).length;
}