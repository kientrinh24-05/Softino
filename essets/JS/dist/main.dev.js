"use strict";

//Menu 
var menuMobile = {
  init: function init() {
    this.clickShowmenu('.humberger', '.menu__list', 'showmenu');
    this.clickShowmenu('#item2 .list--item-black', '#item2 .drop__menu', 'showMenu');
    this.clickShowmenu('#item3 .list--item-black', '#item3 .drop__menu', 'showMenu');
    this.clickShowmenu('#item4 .list--item-black', '#item4 .drop__menu', 'showMenu');
    this.clickShowmenu('#item5 .list--item-black', '#item5 .drop__menu', 'showMenu');
    this.clickShowmenu('#item6 .list--item-black', '#item6 .drop__menu', 'showMenu');
    this.clickShowmenu('#item7 h5', '#item7 .drop__menu2', 'showmenu2');
    this.clickShowmenu('#item8 h5', '#item8 .drop__menu2', 'showmenu2');
    this.scrollMenu('.header', 'fixmenu');
  },
  clickShowmenu: function clickShowmenu(button, menu, togeMenu) {
    var btn = document.querySelector(button);
    var navMenu = document.querySelector(menu);
    btn.addEventListener('click', function () {
      navMenu.classList.toggle(togeMenu);
    });
  },
  scrollMenu: function scrollMenu(menu, classfix) {
    var Nav = document.querySelector(menu);
    var heightMenu = document.querySelector(menu).offsetHeight;
    window.addEventListener('scroll', function () {
      var heightScroll = window.pageYOffset;

      if (heightScroll >= heightMenu / 2) {
        Nav.classList.add(classfix);
      } else {
        Nav.classList.remove(classfix);
      }
    });
  }
};
menuMobile.init(); // Slider 

$(document).ready(function () {
  $('.team_slide').owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        loop: true
      }
    }
  });
});
$(document).ready(function () {
  $('.slide_creative').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        loop: true
      }
    }
  });
});
$(document).ready(function () {
  $('.testional-carousel').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      500: {
        items: 1,
        nav: false
      },
      1000: {
        items: 1,
        loop: true
      }
    }
  });
}); // quote: function() {
//     const quoteCarousel = $("#quote-carousel");
//     let owl = quoteCarousel.owlCarousel({
//         items: 1,
//         loop: true,
//         autoplay: true,
//         autoplayTimeout: 2000,
//         dots: true,
//         dotsContainer: '#carousel-custom-dots',
//         nav: false,
//         dotsEach: true,
//         dotsData: true
//     });
//     $(".owl-dot").click(function() {
//         owl.trigger("to.owl.carousel", [$(this).index(), 300]);
//     });
//     owl.on('changed.owl.carousel', function() {
//         let items = document.querySelectorAll(".owl-dot");
//         // set opacity 0.6 for not active
//         items.forEach(item => {
//             item.style.opacity = "0.6";
//         });
//         // set opacity 1 for not active
//         let activeItem = document.querySelector(".owl-dot.active");
//         activeItem.style.opacity = "1";
//     });
// }
//// CountUp
// function numCounter(tagId, maxCount, speed) {
//     var initialNumber = 0;
//     function counter() {
//         document.getElementById(tagId).innerHTML = initialNumber;
//         ++initialNumber;
//     }
//     var counterDelay = setInterval(counter, speed);
//     function totalTime() {
//         clearInterval(counterDelay);
//     }
//     var totalPeriod = speed * (maxCount);
//     setTimeout(totalTime, totalPeriod);
// }
// numCounter("Num1", 2304, 10);
// numCounter("Num2", 3585, 10);
// numCounter("Num3", 1365, 10);
// numCounter("Num4", 4328, 10);
// Clients

var client = document.querySelector(".clients__items");
var clientItem = document.querySelectorAll(".clients__item");
var clientBtn = document.querySelectorAll('.clients__button');
var c = 0;
var clientSize = clientItem[0].offsetWidth + 25;
client.style.transform = "translateX(".concat(-clientSize * c, "px)");

autoPlay = function autoPlay() {
  clientBtn.forEach(function (btn) {
    return btn.classList.remove('active');
  });
  c++;
  client.style.transition = '.5s ease-out';
  c = c % clientItem.length;
  client.style.transform = "translateX(".concat(-clientSize * c, "px)");
  clientBtn[c].classList.add('active');
};

setInterval(autoPlay, 5000);
clientBtn.forEach(function (btn) {
  return btn.addEventListener('click', function (e) {
    clientBtn.forEach(function (btn) {
      return btn.classList.remove('active');
    });
    var count = e.target.dataset.count;
    client.style.transition = '.5s ease-out';
    client.style.transform = "translateX(".concat(-clientSize * count, "px)");
    clientBtn[count].classList.add('active');
  });
}); /// Video 

var video = {
  init: function init() {
    this.showVideo();
  },
  showVideo: function showVideo() {
    var videoBtn = document.querySelector('.bnt_play');
    var video = document.querySelector('.modal__video');
    videoBtn.addEventListener('click', function () {
      video.style.display = "block";
    });
  }
};

window.onclick = function (e) {
  if (e.target.className === "modal__video") {
    e.target.style.display = "none";
  }
};