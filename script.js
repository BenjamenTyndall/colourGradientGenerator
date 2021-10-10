var css = document.querySelector("h3");
var col1 = document.querySelector(".color1");
var col2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var show = document.getElementById("show");

show.addEventListener("click", function(){
	css.textContent = body.style.background + ";"

})


col1.addEventListener("input", function(){
	console.log("colour 1 - " , col1.value);
	body.style.background = "Linear-gradient(to right, " + col1.value + "," + col2.value + ")"
})

col2.addEventListener("input", function(){
	console.log("colour 2 - " , col2.value);
	body.style.background = "Linear-gradient(to left, " + col2.value + "," + col1.value + ")"
})