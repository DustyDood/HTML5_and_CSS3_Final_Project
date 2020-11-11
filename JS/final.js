/*This opens up the contact form*/
function openSesame() {
    document.getElementById("contactform").style.display="block";   
}

/*This closes the contact form*/
function closeSesame() {
    document.getElementById("contactform").style.display="none";  
}

/*This closes the contact form if open, or opens it if closed*/
function bothWaysSesame() {
    if(document.getElementById("contactform").style.display==="block") {
        document.getElementById("contactform").style.display="none"; 
    } else {
        document.getElementById("contactform").style.display="block"
    }
}

/*Ideally, the form would actually submit to my e-mail
In this case, it'll just give a message that the server isn't set up yet*/
function validationStation() {
    var name = document.forms["formform"]["Name"].value;
    var email = document.forms["formform"]["Email"].value;
    var message = document.forms["formform"]["Message"].value;
    console.log(name, email, message);

    if (name == "") {
        alert("Please enter your name in the 'Name' field!")
    } else if (email == "") {
        alert("Please enter your e-mail in the 'E-mail' field!")
    } else if (message == "") {
        alert("Please enter your message in the 'Message' field!")
    }
    else {
        alert("Thank you for your submission! Unfortunately, this is still a work in progress, so no messages will be submitted. Sorry!")
    }
    return false;
}

var slideIndex = 1;
  showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	  for (i = 0; i < slides.length; i++) {
	  slides[i].style.display = "none";  
	  }
	  for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
