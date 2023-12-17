function solution(dots) {
    const x = new Set();
    const y = new Set();

    dots.forEach((element) => {
        x.add(element[0]);
        y.add(element[1]);
    });

    const width = Math.max(...x) - Math.min(...x);
    const height = Math.max(...y) - Math.min(...y);

    return width * height
}
