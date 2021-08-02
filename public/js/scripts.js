/*!
 * Start Bootstrap - Resume v6.0.1 (https://startbootstrap.com/template-overviews/resume)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
 */
(function () {
   // Smooth scrolling using jQuery easing
      $('a.nav-link.js-scroll-trigger[href*="#"]:not([href="#"])').on(
         "click",
         function () {
            if (
               location.pathname.replace(/^\//, "") ==
                  this.pathname.replace(/^\//, "") &&
               location.hostname == this.hostname
            ) {
               var target = $(this.hash);
               console.log(target, "from scrips.js");
			   alert(target)
               target = target.length
                  ? target
                  : $("[name=" + this.hash.slice(1) + "]");
               if (target.length) {
                  $("html, body").animate(
                     {
                        scrollTop: target.offset().top,
                     },
                     2000,
                     "swing"
                  );
                //   return false;
               }
            }
         }
      );

//    $("a.nav-link.js-scroll-trigger").on("click", function (e) {
//       e.preventDefault();
//       alert("clicked a link jQuery works!");
//       console.log("WHAT THE F?");
//       var offset = 0;
//       var target = this.hash;
//       if ($(this).data("offset") !== undefined) offset = $(this).data("offset");
//       $("html, body").animate(
//          {
//             scrollTop: $(target).offset().top,
//          },
//          1500,
//          "swing",
//          function () {
//             window.location.hash = target;
//          }
//       );
//    });

   // Closes responsive menu when a scroll trigger link is clicked
//    $(".js-scroll-trigger").on("click", function () {
//       console.log("clicked");
//       $(".navbar-collapse").collapse("hide");
//    });

   // Activates tooltip functionality for skills section
   $(function () {
      $('[data-toggle="tooltip"]').tooltip();
   });

   // Activate scrollspy to add active class to navbar items on scroll
   $("body").scrollspy({
      target: "#sideNav",
   });

})(); // End of use strict
