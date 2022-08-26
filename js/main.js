const swiper = new Swiper('.swiper', {
    // Optional parameters
        effect: "coverflow",
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: "auto",
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    
    },
  
    // Navigation arrows
  
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });