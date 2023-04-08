function myFunction() {
	var x = document.getElementById("myTopnav");
	if (x.className === "topnav") {
		x.className += " responsive";
	} else {
		x.className = "topnav";
	}
}

setInterval(() => {
	Check()
}, 10);
var checked = false;
function Check() {
	var checkbox = document.querySelector(".checkbox");


	if (checked===false){
		if (checkbox.checked) {
			console.log("checkbox is checked"); 
			return checked = true;
		}
	}else{
		if (!checkbox.checked){
			console.log("checkbox is unchecked");
			return checked=false;
		}
	}
}