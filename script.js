$(document).ready(function() {
  let currentSlide = 0;
  const slides = $('.slide');
  const totalSlides = slides.length;

  // Click on slideshow to go to next image
  $('#slideshow').on('click', function() {
    // Hide current slide
    slides.eq(currentSlide).removeClass('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Show next slide
    slides.eq(currentSlide).addClass('active');
  });
});

