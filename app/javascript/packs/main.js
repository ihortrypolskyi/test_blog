document.addEventListener("turbolinks:load", () => {

//change menu on scroll

  (function($) {
    "use strict";


    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });

    var MQL = 992;


    if ($(window).width() > MQL) {
      var headerHeight = $('#mainNav').height();
      $(window).on('scroll', {
          previousTop: 0
        },
        function() {
          var currentTop = $(window).scrollTop();
          if (currentTop < this.previousTop) {
            if (currentTop > 0 && $('#mainNav').hasClass('is-fixed')) {
              $('#mainNav').addClass('is-visible');
            } else {
              $('#mainNav').removeClass('is-visible is-fixed');
            }
          } else if (currentTop > this.previousTop) {
            $('#mainNav').removeClass('is-visible');
            if (currentTop > headerHeight && !$('#mainNav').hasClass('is-fixed')) $('#mainNav').addClass('is-fixed');
          }
          this.previousTop = currentTop;
        });
    }

  })(jQuery);

//fade out notice
  let notice = document.getElementById("notice");
  if (typeof(notice) != 'undefined' && notice != null){
    if (notice.innerHTML) {
      setTimeout(function() {
        notice.classList.add("hidden");
      }, 1000);

    }
  }

//fade in please-login-message
  let please_login_message = document.getElementsByClassName("please-login-message")[0];
    if (typeof(please_login_message) != 'undefined' && please_login_message != null){
      if (please_login_message.innerHTML) {
        setTimeout(function() {
          please_login_message.classList.remove("hidden");
          please_login_message.classList.add("shown");
        }, 3000);
      }
    }

})
