// ==========
// Soal String 2 - Substring
// ==========

// [INSTRUKSI]
// Tersedia 2 input: wholeString dan subString
// Output: posisi subString dalam wholeString.
//        Jika tidak ditemukan, return -1
// Built-in function tidak boleh digunakan

// [CONTOH]
// 1) wholeString = 'hello world!', subString = 'world'    -->    6
// */

function positionSubstring(wholeString, subString) {
   // start code here
  var kiri = wholeString.length;
  var kanan = subString.length;
  if (kiri < kanan){
    return -1;
  }
  else{
    return jumlah= kiri - kanan;
  }
}

console.log(positionSubstring('hello world', 'world'));    // 6
 console.log(positionSubstring('applepie', 'pie'));        // 5
 console.log(positionSubstring('not found', 'hello'));    // -1
 console.log(positionSubstring('facebook', 'facebook')); // 0
 console.log(positionSubstring('big', 'bigger'));        // -1