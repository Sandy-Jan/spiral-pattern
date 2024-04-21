function spiralArray(arr) {
    var ans = [];
    var remaining = arr.length * arr[0].length;
    var tw = 0;
    var bw = arr.length - 1;
    var lw = 0;
    var rw = arr[0].length - 1;
    while (remaining > 0) {
        for (var j = lw; j <= rw; j++) {
            ans.push(arr[tw][j]);
            remaining--;
        }
        tw++;
        for (var i = tw; i <= bw; i++) {
            ans.push(arr[i][rw]);
            remaining--;
        }
        rw--;
        for (var j = rw; j >= lw; j--) {
            ans.push(arr[bw][j]);
            remaining--;
        }
        bw--;
        for (var i = bw; i >= tw; i--) {
            ans.push(arr[i][lw]);
            remaining--;
        }
        lw++;
    }
    return ans;
}
var arr = spiralArray([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
]);
console.log(arr);
