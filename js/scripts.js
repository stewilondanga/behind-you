var navigate = (function() {
  $('.dd').toggle();
  $('.dd_btn').click(function() {
    var dataName = $(this).attr('data-name');
    $('.dd').hide();
    $('.' + dataName).toggle();
  });
})();

var startDelay = 2000;

$("html, body, .container").click(function() {
  if ($(".letter").hasClass("active")) {
    $(".letter").removeClass("active");
  } else {
    $(".letter").addClass("active");
  }
});

$(".letter").each(function(key, value) {
  $(value).height(20);
  $(".letters").hide().removeClass("hidden").fadeIn("slow");
  setTimeout(function() {
    $(value).height(200);
  }, startDelay + 20 * $(value).index());
  setTimeout(function() {
    $(value).addClass("active");
  }, startDelay + 3000 + 200 * $(value).index());
});

setTimeout(function() {
  $(".letter").removeClass("active");
}, startDelay + 2500);

setTimeout(function() {
  $(".letter").addClass("active");
}, startDelay + 500);

/*setTimeout(function() {
  $(".letter").removeClass("active");
}, 10000);
