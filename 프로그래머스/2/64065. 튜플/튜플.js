function solution(s) {
    s = JSON.parse(s.replace(/{/g, '[').replace(/}/g, ']'));

    s.sort((a,b)=> a.length - b.length)

    const answer = new Set();

    s.forEach((element) => {
        element.forEach((v) => {
            answer.add(v);
        });
    });

    return[...answer]
}