$(function () {
  /* Fixed header */
  let header = $("#header");
  let intro = $("#intro");
  let introH = intro.innerHeight();;
  let scrollPos = $(this).scrollTop();
  let nav = $("#nav");
  let navToggle = $("#navToggle");

  checkScroll(scrollPos, introH);
  
  $(window).on("scroll resize", function () {
      introH = intro.innerHeight();
      scrollPos = $(this).scrollTop();
      checkScroll(scrollPos, introH);
  });

  function checkScroll(scrollPos, introH) {
      if (scrollPos > introH) {
          header.addClass("fixed");
      }
      else {
          header.removeClass("fixed");
      }
  }
  /* Smooth Scroll */
  /*$("[data-scroll]").on("click", function (event) {
      event.preventDefault();
      let elID = $(this).data('scroll');
      let elOffset = $(elID).offset().top;
      nav.removeClass("show");
      $("html, body").animate({
          scrollTop: elOffset + 1
      }, 500);
  });*/
  /* Nav Toggle */
  navToggle.on("click", function (event) {
      event.preventDefault();
      nav.toggleClass("show");
  });
  
  /*Glide*/
  const cfgGlide = {
    type: 'carousel',
    perView: 1
  }
  new Glide('.glide', cfgGlide).mount();
  
});



