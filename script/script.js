/*setAttribute = () => {
  const a = document.querySelectorAll("#navbar_link");
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    element.setAttribute("onclick", "clickItemNav(this)");
  }
};
setAttribute();

clickItemNav = (ele) => {
  const a = document.querySelectorAll("#navbar_link");
  for (let index = 0; index < a.length; index++) {
    const element = a[index];
    if (element !== ele) {
      element.classList.remove("item-selected");
    } else {
      ele.classList.add("item-selected");
    }
  }
};*/
/***********CAROUSEL*************/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

/***********MEDIA QUERY JS TO CHANGE THE IMAGE PROFILE*************/

function changeImg(x) {
  if (x.matches) {
    let img = document.getElementById("imageProfile");
    img.src = "./images/me/profile-icon.png";
  } else {
    let img = document.getElementById("imageProfile");
    img.src = "./images/me/profile.jpg";
  }
}
var x = window.matchMedia("(max-width: 800px)");
changeImg(x); // Call listener function at run time
x.addListener(changeImg); // Attach listener function on state changes
