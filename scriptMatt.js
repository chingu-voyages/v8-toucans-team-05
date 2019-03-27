window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 2,
    slidesToScroll: 1,
    scrollLock: true,
    rewind: true,
    dots: '#dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
        // screens greater than >= 775px
        breakpoint: 575,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 3,
          slidesToScroll: 1,
          draggable: true,
          rewind: true,
          dots: '#dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          }

        }
      },
      {
        // screens greater than >= 575px
        breakpoint: 750,
        settings: {
          // Set to `auto` and provide item width to adjust to viewport
          slidesToShow: 4,
          slidesToScroll: 1,
          draggable: true,
          rewind: true,
          dots: '#dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          }

        }
      },
      {
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          draggable: true,
          rewind: true,
          dots: '#dots',
          arrows: {
            prev: '.glider-prev',
            next: '.glider-next'
          }

        }
      }
    ]
  })
});
