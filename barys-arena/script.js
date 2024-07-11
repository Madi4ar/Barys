$(document).ready(function () {
  $(".slider-catalog").slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    dots: false,
    arrows: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          //autoplay:true,
        },
      },
    ],
  });

  let mobileMenu = document.querySelector(".mobile-menu-btn");
  let menu = document.querySelector(".mobileMenu");
  mobileMenu.onclick = function () {
    menu.classList.toggle("!flex");
  };

  document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll('a[href^="#"]');

    for (let link of links) {
      link.addEventListener("click", function (event) {
        event.preventDefault();

        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    }
  });
});
