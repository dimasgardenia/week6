// [INSTRUKSI]
// Tersedia satu input: array yang memiliki duplikat
// Output: array yang telah di-sorted, semua duplikat dihapus

// [CONTOH]
// 1) [1, 4, 3, 1, 2, 2, 4]    ->    [1, 2, 3, 4]
// */



function hapusDuplikat(arr) {
 var nomor = arr.sort();
 //console.log(nomor);
    var tampung = [];
  for (var i = 0; i<nomor.length; i++){
      if (arr[i]!=arr[i-1]) 
        tampung.push(arr[i])
    }
  return tampung;
}
 console.log(hapusDuplikat([1, 4, 3, 1, 2, 2, 4]));    // [1, 2, 3, 4]
 console.log(hapusDuplikat([2, 2, 2, 2]));            // [2]
 console.log(hapusDuplikat([1, 2, 3]));                // [1, 2, 3]
 console.log(hapusDuplikat([6, 5, 3, 2]));            // [2, 3, 5, 6]