function occurence(arr:number[], target:number):number{
      let occ = -Infinity;
      let l = 0;
      let r = arr.length-1;

      while(l <= r){
            let mid = Math.floor((l + r)/2);
            if(arr[mid] == target){
                  occ = mid;
                  r = mid - 1;

            }else if(arr[mid] > target){
                  r = mid - 1;
            }else{
                  l = mid + 1;
            }
      }
      return occ;
}
let array = [0,0,0,1,1,2,2,3,3,3,6,6,7,7,7,8,8,8,9,9,9];
let tar = 9;
let ind = occurence(array,tar);
console.log(ind);
