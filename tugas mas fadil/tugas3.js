// Diberikan 2 input: array dan targetSum
// Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
// targetSum, sepasang nilai tidak boleh memiliki indeks yang sama

// [CONTOH]
// 1)    [1 ,2, 3, 4, 5], targetSum = 8        -->        1
// */

function pairSum(arr, targetSum){
  // start code here
  var tampung =[];
  var timpang= 0;
  for (var i = 0; i < arr.length; i ++){
    tampung.push(arr[i]);
    for(var j=0; j< tampung.length; j++){
    if ((arr[j]+arr[i+1]) == targetSum){
       timpang++;
    }  
   } 
  }
  return timpang;
}

 console.log(pairSum([1, 2, 3, 4, 5], 8));    // 1
 console.log(pairSum([3, 2, 1, 5, 2], 4));    // 2
  
console.log(pairSum([1, 1, 1], 2));            // 3
console.log(pairSum([1, 2, 3], 6));            // 0