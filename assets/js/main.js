(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "k5jo3bmjki");

$('body').scrollspy({ target: '.navmenu' });

// When we click on the LI
$("ul.qcontrols li").click(function () {
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active
    $("ul.qcontrols li.active").removeClass("active");
    // And make this active
    $(this).addClass("active");
  }
});


//WOW Scroll Spy
var wow = new WOW({
  //disabled for mobile
  mobile: false
});
wow.init();

jQuery(document).ready(function ($) {
  $('.circle').circleProgress({
    value: 0.70,
    startAngle: 4.75,
    size: 200,
    fill: { gradient: ["#FFFFFF"] }
  });
  $('.two').circleProgress({
    value: 0.75,
  });
  $('.three').circleProgress({
    value: 0.50,
  });
  $('.four').circleProgress({
    value: 0.90,
  });

  //Clients carousel Slider
  $('#clients-carousel').owlCarousel({
    navigation: false, // Show next and prev buttons
    slideSpeed: 400,
    paginationSpeed: 800,
    autoPlay: true,
    pagination: false,
    items: 4,
    itemsCustom: false,
    itemsDesktop: [1199, 4],
    itemsDesktopSmall: [980, 3],
    itemsTablet: [768, 2],
    itemsTabletSmall: false,
    itemsMobile: [479, 1],
  });
  $('#menu').click(function () {
    $('#menu').not(this).removeClass("active");
    $(this).toggleClass("active");
  });


  const icons = [
    {
      type: 'Programming Languages',
      items: [
        { url: 'assets/img/icons/nodejs.png', width: 40 },
        { url: 'assets/img/icons/python.png', width: 40 },
        { url: 'assets/img/icons/csharp.png', width: 40 },
      ]
    },
    {
      type: 'Technology Stacks',
      items: [
        { url: 'assets/img/icons/html5.png', width: 40 },
        { url: 'assets/img/icons/css3.png', width: 40 },
        { url: 'assets/img/icons/react.png', width: 40 },
        { url: 'assets/img/icons/vue.png', width: 40 },
        { url: 'assets/img/icons/nextjs.png', width: 40 },
        { url: 'assets/img/icons/nestjs.png', width: 40 },
        { url: 'assets/img/icons/cypress.svg', width: 40 },
        { url: 'assets/img/icons/jest.webp', height: 40 },
        { url: 'assets/img/icons/fastapi.png', height: 40 },
        { url: 'assets/img/icons/linux.png', width: 40 },
        { url: 'assets/img/icons/mysql.png', width: 40 },
        { url: 'assets/img/icons/postgreesql.png', width: 40 },
        { url: 'assets/img/icons/docker.png', width: 40 },
        { url: 'assets/img/icons/git.png', width: 40 },
      ]
    }
  ]
  $.each(icons, function (index, { type, items }) {
    const $type = $('<p>').text(type).css({
      // fontWeight: 'bold',
      fontSize: 22,
      margin: '2em'
    });
    $('.skill-icons').append($type);

    $.each(items, function (index, { url, width, height }) {
      const $icon = $('<img />').attr('src', url)
        .attr('width', width)
        .attr('height', height)
        .css({
          display: 'inline-block',
          margin: '.5em'
        });
      $('.skill-icons').append($icon);
    })
  });
});


//ScrollTop
$(function () {
  $('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
