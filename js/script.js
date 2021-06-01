$(".backtotop").click(function(){

  $("body,html").animate({
    scrollTop:0,
    })
    // if($(window).scrollTop() > 1000){
    //   $(".backtotop").fadeIn()
    // }else{
    // }  $(".backtotop").fadeOut()
  
});


$(window).scroll(function(){
  // if($(window).scrollTop() > 200){
  //   $(".menu").addClass("sir")
  // }else{
  //   $(".menu").removeClass("sir")
  // }
  if($(window).scrollTop() > 200){
    $(".backtotop").fadeIn()
  }else{
    $(".backtotop").fadeOut()
  }
})

// $(window).on('scroll', function(){
//   var scrolling = $(this).scrollTop();
//   if(scrolling > 150){
//   $('.navbar').addClass('bg');
//   }
//   else{
//   $('.navbar').removeClass('bg');
  
//   }
  // // back to top button
  // if(scrolling > 200){
  // $('.back2top').fadeIn(500);
  // }
  // else{
  // $('.back2top').fadeOut(500);
  // }
  // });
  // 22:16
  // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top -100
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
// bannner-slider start
$('.banner_slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  fade:true,
  speed: 1200,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
// bannner-slider end

// type js "doraw" end
var typed = new Typed('.doraw', {
  stringsElement: '#typed-strings',
  typeSpeed: 200,
});

// type js "doraw" end


// imge start
$('.imge').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// imge end



// testimonial_slaider start

$('.testimonial_slaider').slick({
  dots: true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


// testimonial_slaider end




// partner_slider end
$('.partner_slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay:true,
  autoplaySpeed:3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

