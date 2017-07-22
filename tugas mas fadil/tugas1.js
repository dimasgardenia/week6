/*
HACKTIV8 Practice

Nama:

==========
Soal Array 1 - Di Bawah Rata-rata
==========

[INSTRUKSI]
Tersedia 1 input Array
Output: array berisi semua angka dalam array input yang di bawah rata-rata

[CONTOH]
1) [1, 2, 3, 4, 5]  --> [1, 2]
*/


function belowAverage(arr) {
    var n = arr;
    var tampung = 0;
    
  
    for (var i = 0; i < n.length; i++) {
      tampung += n[i]/(n.length); 
    }  
  var jainal = [];
  for(var x = 0; x < n.length; x++){
    if( n[x] < tampung ){
     jainal.push(n[x]);
    }
  }
 return jainal;
 
}
  

console.log(belowAverage([1, 2, 3, 4, 5])); // [1, 2]
console.log(belowAverage([4, 2, 5, 1]));    // [2, 1]
console.log(belowAverage([5, 5, 5]));       // []
console.log(belowAverage([10, 2, 3, 2]));   // [2, 3, 2]
