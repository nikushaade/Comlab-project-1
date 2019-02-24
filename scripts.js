//creating the animation at the start of the webpage
let hotbod = document.querySelector("body");

function doStuff() {
    hotbod.className += " animate";

}

window.onload = function() {
    doStuff();
};


//creating quotes 
(function() {

    var quotes = $(".fader");
    var quoteIndex = -1;
    
    function showNextQuote() {
        ++quoteIndex;
        quotes.eq(quoteIndex % quotes.length)
            .fadeIn(1000)
            .delay(2000)
            .fadeOut(1000, showNextQuote);
    }
    
    showNextQuote();
    
})();


//making the navbar functional and appear/dissapear when scrolled up/down
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
};


//creating the click effect on team bio pictures so that the text appears

let contentWelcome = document.getElementById("nik");
contentWelcome.style.display = "block";


let buttonOne = document.getElementById('button-one');
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");

let num = 0;
function doSomething(){

	let contentDivs = document.getElementsByClassName("content");
	for (let i=0; i < contentDivs.length; i++){
		contentDivs[i].style.display = "none";
	}

	let contenOne = document.getElementById("nik");
	contenOne.style.display = "block";
}


function doSomething2(){
let contentDivs = document.getElementsByClassName("content");
	for (let i=0; i < contentDivs.length; i++){
		contentDivs[i].style.display = "none";
	}

	let contentTwo = document.getElementById("lusine");
	contentTwo.style.display = "block";
}

function doSomething3(){
let contentDivs = document.getElementsByClassName("content");
	for (let i=0; i < contentDivs.length; i++){
		contentDivs[i].style.display = "none";
	}


	let contentThree = document.getElementById("anita");
	contentThree.style.display = "block";
}

buttonOne.addEventListener("click", doSomething);
buttonTwo.addEventListener ("click", doSomething2);
buttonThree.addEventListener("click", doSomething3);


//once the button is clicked scroll down to bio
$(".content").hide();

$("button").click(function() {
    $('html,body').animate({
        scrollTop: $(".content").offset().top},
        'slow');
});







