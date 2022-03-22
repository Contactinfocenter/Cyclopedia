$(document).scroll(function() {
  var scroll = $(this).scrollTop();
  if (scroll >= 800) {
    $("#popUp").css("margin-left", "-507px");
    $("#plus").css("margin-left", "-117px");
  }
});

$("#plus").click(function() {
  $("#popUp").css("margin-left", "-117px");
  $("#plus").css("margin-left", "-507px");
});

$("#close").click(function() {
  $("#popUp").css("margin-left", "-507px");
  $("#plus").css("margin-left", "-117px");
});