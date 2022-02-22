window.addEventListener("load", () => {
    console.log("Up and running.")
  })

  var slideIndex = 1;
  showSlides(slideIndex);

  //Next/Previous Controls
  function plusSlides(n) {
      showSlides(slideIndex += n);
  }

  //Thumbnail Image Controls
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }

  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = 1}
      for (i = 0; i < slides.length; i++) {
          slides[i].getElementsByClassName.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].style.display = "block";
      dots[slideIndex-1].className += " active";
  }
