//jQuery for highlighting active menu links
$(document).ready(function(){
  $(".topnav a").click(function(){
    $(".topnav a").removeClass('active');
    $(this).addClass('active');
  })
});
//Open side navigation for mobile view
function openNav() { 
  document.getElementById("topnav").style.width = "100%";
}
//close side navigation for mobile view
function closeNav() {
  document.getElementById("topnav").style.width = "0%";
}

function contactMenuList() {
  var x = screen.width;
  if(x < 470){
    document.getElementById("topnav").style.width = "0%";
  }else{
    document.getElementById("topnav").style.width = "100%";
  }
}

//design the photo gallery
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
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex-1].alt;
}

