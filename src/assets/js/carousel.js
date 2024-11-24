const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const nav = document.querySelector(".nav");

navBtn.onclick = function () {
  navIcon.classList.toggle("nav-icon--active");
  nav.classList.toggle("nav--mobile");
  document.body.toggle("no-scroll");
};

var $screenshots = $(".screenshots-carousel");
$screenshots.owlCarousel({
  loop: true,
  autoplay: true,
  autoPlayTimeout: 1000,
  margin: 30,
  smartSpeed: 3000,
  items: 1,
  responsive: {
    1200: {
      items: 4,
      startPosition: 1,
    },
    1000: {
      items: 3,
      margin: 30,
    },
    650: {
      items: 3,
      margin: 30,
    },
  },
});

var $testimonial = $(".testimonial-carousel");
$testimonial.owlCarousel({
  loop: true,
  autoplay: true,
  autoPlayTimeout: 1000,
  margin: 30,
  items: 1,
  smartSpeed: 3000,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  // responsive: {
  // 	640: {
  // 		items: 3,
  // 		startPosition: 1,
  // 	},
  // 	1000: {
  // 		items: 3,
  // 		margin: 30,
  // 	},
  // },
});

var $team = $(".team-carousel");
$team.owlCarousel({
  loop: true,
  autoplay: true,
  autoPlayTimeout: 1000,
  margin: 30,
  dots: true,
  smartSpeed: 3000,
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  items: 1,
  responsive: {
    700: {
      items: 3,
      startPosition: 1,
    },
    1000: {
      items: 4,
      margin: 30,
    },
  },
});
