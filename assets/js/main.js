$(document).ready(function () {
  $(".header-toggle").on("click", function () {
    const $this = $(this);
    const $menu = $(".header-mobile-menu");

    $this.toggleClass("is-active");

    const isOpen = $this.hasClass("is-active");

    $this.attr("aria-expanded", isOpen);

    if (isOpen) {
      $menu.stop(true, true).slideDown(250);
    } else {
      $menu.stop(true, true).slideUp(250);
    }
  });
});
