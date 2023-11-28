function reverseString(s) {
    return s.split('').reverse().join('');
}

function solution(myString, queries) {
    for (let i = 0; i < queries.length; i++) {
        const [start, end] = queries[i];
        myString = myString.substring(0, start) + reverseString(myString.substring(start, end + 1)) + myString.substring(end + 1);
    }

    return myString;
}