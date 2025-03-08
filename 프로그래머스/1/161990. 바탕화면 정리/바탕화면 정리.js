const TARGET = "#";

function solution(wallpaper) {
  let position = [Infinity, Infinity, -Infinity, -Infinity];

  wallpaper.forEach((arr, y) => {
    arr.split("").forEach((value, x) => {
      if (value === TARGET) {
        if (position[0] > y) {
          position[0] = y;
        }
        if (position[1] > x) {
          position[1] = x;
        }
        if (position[2] < y + 1) {
          position[2] = y + 1;
        }
        if (position[3] < x + 1) {
          position[3] = x + 1;
        }
      }
    });
  });

  return position;
}