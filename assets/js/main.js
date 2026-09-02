$(document).ready(function () {
  $(".header-toggle").on("click", function (e) {
    e.stopPropagation();
    $(this).toggleClass("is-active");
    $(".header-mobile-menu").toggleClass("active");
  });

  $(".header-mobile-menu").on("click", function (e) {
    e.stopPropagation();
  });

  $(document).on("click", function () {
    $(".header-mobile-menu").removeClass("active");
  });
  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");
    const $answer = $item.find(".faq-answer");

    $(".faq-item")
      .not($item)
      .removeClass("active")
      .find(".faq-answer")
      .stop(true, true)
      .slideUp(300);

    $item.toggleClass("active");

    $answer.stop(true, true).slideToggle(300);
  });
});
