// 自行加入的JS請寫在這裡
$(function() {
//marquee
if ($('.marquee').length > 0) {
    $('.marquee ul').slick({
        dots: false,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        speed: 300,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        focusOnSelect: true,
    });
}

//collapsible
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
  } else {
      content.style.display = "block";
  }
});
}




    // 首頁輪播
    // $('.mpSlider').slick({
    //     mobileFirst: true,
    //     dots: true,
    //     arrow: true,
    //     infinite: true,
    //     speed: 500,
    //     autoplay: true,
    //     fade: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease'
    // });
    // 廣告輪播
    // $('.adSlider').slick({
    //     mobileFirst: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 300,
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     arrow: true,
    //     lazyLoaded: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //         breakpoint: 1200,
    //         settings: {
    //             slidesToShow: 5,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     },{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 4,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     },{
    //         breakpoint: 575,
    //         settings: {
    //             slidesToShow: 3,
    //             slidesToScroll: 1,
    //             arrows: true
    //         }
    //     }]
    // });
    //燈箱slick+lightBox組合
    // $('.cp_slider').slick({
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 4,
    //     slidesToScroll: 1,
    //     autoplay: false,
    //     autoplaySpeed: 1500,
    //     pauseOnHover: true,
    //     pauseOnFocus: true,
    //     focusOnSelect: true,
    //     accessibility: true,
    //     lazyLoad: 'ondemand',
    //     ease: 'ease',
    //     responsive: [{
    //         breakpoint: 768,
    //         settings: {
    //             slidesToShow: 2,
    //             slidesToScroll: 2,
    //             infinite: true,
    //             dots: true
    //         }
    //     }, {
    //         breakpoint: 545,
    //         settings: {
    //             arrows: true,
    //             slidesToShow: 2,
    //             slidesToScroll: 2
    //         }
    //     }, {
    //         breakpoint: 480,
    //         settings: {
    //             arrows: true,
    //             slidesToShow: 1,
    //             slidesToScroll: 1,
    //             arrows: false
    //         }
    //     }]
    // });
    // $('.cp_slider').slickLightbox({
    //     caption: 'caption',
    //     lazyLoad: 'ondemand',
    //     useHistoryApi: 'true',
    //     ease: 'ease',
    //     lazy: true
    // });
     // cp_photo
    // $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
    //     var i = (currentSlide ? currentSlide : 0) + 1;
    //     $('.controls').html(i + '/' + slick.slideCount);
    // });
    // $('.Slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     swipe: false,
    //     swipeToSlide: false,
    //     lazyLoad: 'ondemand',
    //     asNavFor: '.Slider-nav',
    //     infinite: true
    // });
    // $('.Slider-nav').slick({
    //     slidesToShow: 2,
    //     slidesToScroll: 1,
    //     asNavFor: '.Slider-for',
    //     dots: true,
    //     arrows: true,
    //     lazyLoad: 'ondemand',
    //     focusOnSelect: true,
    //     infinite: true
    // });
    
});