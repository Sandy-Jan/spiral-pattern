function spiralArray(arr: number[][]) {
  let ans: number[] = [];
  let remaining = arr.length * arr[0].length;
  let tw = 0;
  let bw = arr.length - 1;
  let lw = 0;
  let rw = arr[0].length - 1;

  while (remaining > 0) {
    for (let j = lw; j <= rw; j++) {
      ans.push(arr[tw][j]);
      remaining--;
    }
    tw++;
    for (let i = tw; i <= bw; i++) {
      ans.push(arr[i][rw]);
      remaining--;
    }
    rw--;
    for (let j = rw; j >= lw; j--) {
      ans.push(arr[bw][j]);
      remaining--;
    }
    bw--;
    for (let i = bw; i >= tw; i--) {
      ans.push(arr[i][lw]);
      remaining--;
    }
    lw++;
  }
  return ans;
}
let arr = spiralArray([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
console.log(arr);
