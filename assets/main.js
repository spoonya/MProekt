let intro = $('#intro');
let header = $('#header');
let introH = intro.innerHeight();
let nav = $('#nav');
let scrollPos = $(this).scrollTop();

function checkScroll (scrollPos, introH) {
  if (scrollPos > introH) {
    header.addClass('fixed');
  } else {
    header.removeClass('fixed');
  }
}

checkScroll(scrollPos, introH);

$(window).on('scroll resize', function () {
  introH = intro.innerHeight();
  scrollPos = $(this).scrollTop();
  console.log(checkScroll(scrollPos, introH));
  console.log(scrollPos);
});

$('[data-scroll]').on('click', function(event) {
  event.preventDefault();
  let elId = $(this).data('scroll');
  let elOffset = $(elId).offset().top;
  nav.removeClass('show');

  $('html, body').animate( {
      scrollTop: elOffset + 1
    }, 500)
})

/*Glide*/
const cfgGlide = {
        type: 'carousel',
        perView: 1
    }
    new Glide('.glide', cfgGlide).mount()

/*Parallax*/
/*let rellaxTitle = new Rellax('.intro-title', {
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});

let rellaxSubTitle = new Rellax('.intro-subtitle', {
    speed: -1,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
});*/
