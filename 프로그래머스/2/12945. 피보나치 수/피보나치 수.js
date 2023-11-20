function solution(n) {
  let array = [];
  array[0] = 0;
  array[1] = 1;
  let count = 2;
  while (true) {
    array.push((array[count - 2] + array[count - 1]) % 1234567);
    count++;
    if (count > n) {
      break;
    }
  }
  return array[n];
}
