var divEldest = document.getElementById("eldest-parent");
var divEldesParent = divEldest.children[0];
divEldesParent.innerHTML = "Di Akses Melalui Eldest Parent";
var newdivEldesparent =  divEldesParent.innerHTML;
console.log("Isi Baru dari <div> saya adalah keturunan pertama, menjadi : " + newdivEldesparent);

var divChild =  document.getElementById("a-child");
var divChild1= divChild.previousElementSibling;
divChild1.innerHTML = "di akses melalui a-child";
var newdivChild1 = divChild1.innerHTML;
console.log("Isi Baru dari <div>  saya adalah generasi termuda, yang paling tua, menjadi : " + newdivChild1);

 var divChild2 = divchild.nextElementSibling;
 divChild2.innerHTML = "diakses melalui a-child";
 var newdivChild2 = divChild2.innerHTML
 console.log("Isi Baru dari <div>  saya adalah generasi termuda, yang paling muda, menjadi :" + newdivChild2);
 
 var divChild3 = document.getElementById("a-child");
 var sibdivChild3 = divChild3.parentNode.nextElementSibling;
 sibdivChild3.innerHTML = "di akses melalui a-child";
 var newsibdivChild3 =  sibdivChild3.innerHTML;
 console.log("Isi Baru dari <div> saya adalah generasi yang cukup tua menjadi : " + newsibdivChild3);
 