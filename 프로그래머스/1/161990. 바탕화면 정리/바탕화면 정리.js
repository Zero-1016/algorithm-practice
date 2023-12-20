function solution(wallpaper) {
    let rows = wallpaper.length
    let cols = wallpaper[0].length

    const filePosition = new Array();

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (wallpaper[i][j] === "#") {
                filePosition.push([i, j])
            }
        }
    }

    return [Math.min(...filePosition.map(v => v[0])), Math.min(...filePosition.map(v => v[1])), Math.max(...filePosition.map(v => v[0])) + 1, Math.max(...filePosition.map(v => v[1])) + 1];
}