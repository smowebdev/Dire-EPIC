$(document).ready(function () {
  $(".header-toggle").on("click", function (e) {
    e.stopPropagation();

    $(".header-mobile-menu").toggleClass("active");
  });

  $(".header-mobile-menu").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".header-mobile-menu").removeClass("active");
  });
});
