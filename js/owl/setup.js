/* Carrossel */
$('.owl-carousel').owlCarousel({
    //stagePadding: 40,
    loop: false,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


/* Smooth Scrolling BOTÕES */

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });


/* STICKY NAVIGATION */
const secaoElement = document.querySelector('.secao-principal');

const observer = new IntersectionObserver(function(entries) {
    const entry = entries[0];   
    if (!entry.isIntersecting) {
        document.body.classList.add('sticky');
    }
    
    if (entry.isIntersecting) {
        document.body.classList.remove('sticky');
    }
}, 
 {
    // In the ViewPort
    root: null,
    threshold: 0,
    rootMargin: '-80px'
});
observer.observe(secaoElement);