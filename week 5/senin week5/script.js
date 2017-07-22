document.getElementById("fill-me").innerHTML=  "Halo";

var baru = document.getElementsByClassName("change-all-of-me");
	for (var i=0; i < baru.length; i++){
	var newbaru= baru[i];
	newbaru.innerHTML="HALOO JUGA!";
};


var heading= document.getElementsByTagName("h2")
for (var i=0; i < heading.length; i++){
	var newHeading= heading[i];
	newHeading.innerHTML="APA KABAR";
}


