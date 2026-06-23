(function (c, l, a, r, i, t, y) {
  c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
  t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
  y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
})(window, document, "clarity", "script", "k5jo3bmjki");

$('body').scrollspy({ target: '.navmenu' });

// Offcanvas menu toggle
$('#menu').click(function () {
  $('#menu').not(this).removeClass("active");
  $(this).toggleClass("active");
});

// WOW Scroll Spy
var wow = new WOW({ mobile: true });
wow.init();

// Typewriter effect — cycles through messages separated by ||
(function () {
  var $line = $('.typewriter-line');
  if (!$line.length) return;

  var messages = ($line.data('text') || '').split('||').filter(Boolean);
  if (!messages.length) return;

  var msgIndex = 0;
  var charIndex = 0;
  var isDeleting = false;
  var started = false;
  var $cursor = $('.terminal-body .cursor');

  function tick() {
    var currentText = messages[msgIndex];

    if (!isDeleting) {
      // Typing forward
      $line.text(currentText.substring(0, charIndex + 1));
      charIndex++;
      if (charIndex === currentText.length) {
        // Finished typing — pause then start deleting
        setTimeout(tick, 2000);
        isDeleting = true;
        return;
      }
      setTimeout(tick, 40 + Math.random() * 50);
    } else {
      // Deleting
      $line.text(currentText.substring(0, charIndex - 1));
      charIndex--;
      if (charIndex === 0) {
        // Finished deleting — move to next message
        isDeleting = false;
        msgIndex = (msgIndex + 1) % messages.length;
        setTimeout(tick, 400);
        return;
      }
      setTimeout(tick, 20 + Math.random() * 20);
    }
  }

  function startTypewriter() {
    if (started) return;
    started = true;
    setTimeout(tick, 300);
  }

  var $trigger = $('.typewriter-start');
  $trigger.one('animationend', startTypewriter);
  // Fallback: start after 1.5s if animationend never fires
  setTimeout(startTypewriter, 1500);
})();

// Skill icons rendering
jQuery(document).ready(function ($) {
  var icons = [
    {
      type: 'Programming Languages',
      items: [
        { url: 'assets/img/icons/nodejs.png', width: 44 },
        { url: 'assets/img/icons/python.png', width: 44 },
        { url: 'assets/img/icons/csharp.png', width: 44 },
        { url: 'assets/img/icons/javascript.png', width: 44 },
      ]
    },
    {
      type: 'Technology Stacks',
      items: [
        { url: 'assets/img/icons/html5.png', width: 44 },
        { url: 'assets/img/icons/css3.png', width: 44 },
        { url: 'assets/img/icons/react.png', width: 44 },
        { url: 'assets/img/icons/vue.png', width: 44 },
        { url: 'assets/img/icons/nextjs.png', width: 44 },
        { url: 'assets/img/icons/nestjs.png', width: 44 },
        { url: 'assets/img/icons/cypress.svg', width: 44 },
        { url: 'assets/img/icons/jest.webp', height: 44 },
        { url: 'assets/img/icons/fastapi.png', height: 44 },
        { url: 'assets/img/icons/linux.png', width: 44 },
        { url: 'assets/img/icons/mysql.png', width: 44 },
        { url: 'assets/img/icons/postgreesql.png', width: 44 },
        { url: 'assets/img/icons/docker.png', width: 44 },
        { url: 'assets/img/icons/git.png', width: 44 },
      ]
    },
    {
      type: 'AI & Tools',
      items: [
        { url: 'assets/img/icons/claude-code.svg', width: 44 },
      ]
    }
  ];

  $.each(icons, function (index, item) {
    var $category = $('<div>').addClass('skill-category');
    var $name = $('<p>').addClass('skill-category-name').text(item.type);
    var $iconGroup = $('<div>').addClass('skill-icons');

    $.each(item.items, function (i, icon) {
      var $img = $('<img />')
        .attr('src', icon.url)
        .attr('alt', icon.url.split('/').pop().split('.')[0].replace(/-/g, ' '))
        .attr('width', icon.width || null)
        .attr('height', icon.height || null);
      $iconGroup.append($img);
    });

    $category.append($name).append($iconGroup);
    $('.skill-icons-container').append($category);
  });
});

// Smooth scroll
$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({ scrollTop: target.offset().top }, 800);
        // Close offcanvas if open
        if ($('.navmenu').hasClass('in')) {
          $('.navmenu').removeClass('in');
          $('body').removeClass('canvas-slid');
        }
        return false;
      }
    }
  });
});
