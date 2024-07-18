window.onload = function () {
  // 상단의 마이페이지리스트 기능
  const iconArrow = document.querySelector(".icon-arrow");
  const listShow = document.querySelector(".mypage-list");
  iconArrow.onclick = function () {
    listShow.classList.toggle("showMypageList");
  };
  // swiper=====================
  // 프로모션 스와이퍼기능
  const swPromotion = new Swiper(".sw-promotion", {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      480: { slidesPerView: 2 },
      760: { slidesPerView: 2 },
    },
    navigation: {
      nextEl: ".promotion .sw-next",
      prevEl: ".promotion .sw-prev",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  });
  // 쇼핑의 스와이퍼 기능적용
  const swShopping = new Swiper(".sw-shopping", {
    navigation: {
      nextEl: ".shopping .sw-next",
      prevEl: ".shopping .sw-prev",
    },
    loop: true,
    slidesPerView: 1.2,
    grid: {
      rows: 3,
      fill: "row",
    },
    spaceBetween: 10,
    breakpoints: {
      480: {
        spaceBetween: 26,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      900: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 4,
        slidesPerGroup: 4,
        grid: {
          rows: 1,
        },
      },
    },
  });
  // 투어의 스와이퍼 기능적용
  const swTour = new Swiper(".sw-tour", {
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    loop: true,
    // 모바일버전
    slidesPerView: 1,
    grid: {
      rows: 6,
      fill: "row",
    },
    breakpoints: {
      1024: {
        spaceBetween: 32,
        slidesPerView: 2,
        slidesPerGroup: 2,
        grid: {
          rows: 1,
        },
      },
      1280: {
        spaceBetween: 26,
        slidesPerView: 3,
        slidesPerGroup: 3,
        grid: {
          rows: 1,
        },
      },
    },
  });
  // 티켓의 스와이퍼 기능적용
  const swTicket = new Swiper(".sw-ticket" ,{
    slidesPerView: 2,
    navigation: {
      nextEl: ".tour .sw-next",
      prevEl: ".tour .sw-prev",
    },
    loop:true,
    breakpoints: {
      480: {
        spaceBetween: 32,
        slidesPerView: 2,
       
       
      },
      1024: {
        spaceBetween: 32,
        slidesPerView: 3,
      
     
      },
      1280: {
        spaceBetween: 26,
        slidesPerView:4,
        
      
      },
    },
  })
// live스와퍼
const swLive = new Swiper(".sw-live" , {
  slidesPerView:4,
  spaceBetween: 27,

  breakpoints: {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    400: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    510: {
      spaceBetween: 25,
      slidesPerView: 2,
    },
     
    1025:{
      spaceBetween: 26,
      slidesPerView:3,
    }
  },
  
})
};
