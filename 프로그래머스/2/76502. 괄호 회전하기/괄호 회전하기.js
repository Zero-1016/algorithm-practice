function solution(s) {
    const array = s.split('')
    let solved = 0;
    for (let i = 0; i < array.length; i++) {
        array.push(array.shift())
        let changeArray = array
        while (true) {
            const newArray = changeArray.join('').replace('()', "").replace('{}', "").replace('[]', "").split('');
            if (changeArray.length === newArray.length) break;
            else changeArray = newArray;
        }
        const isSolved = changeArray.length === 0
        if (isSolved) {
            solved++
        }
    }
    return solved;
}