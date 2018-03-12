
$(document).ready(function(){
  $("#nav-intro").click(function() {
    $("html, body").animate({
      scrollTop: $(".bigkuang").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#nav-skill").click(function() {
    $("html, body").animate({
      scrollTop: $(".grow").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#nav-workEXP").click(function() {
    $("html, body").animate({
      scrollTop: $(".contain").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#nav-prjEXP").click(function() {
    $("html, body").animate({
      scrollTop: $(".work").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $("#nav-wantMore").click(function() {
    $("html, body").animate({
      scrollTop: $(".bottom").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $(".fstPage-down a , .header_name a").click(function() {
    $("html, body").animate({
      scrollTop: $(".header").offset().top }, {duration: 500,easing: "swing"});
    return false;
  });
  $(".blockTitle").stop().fadeIn("normal").animate({
		"top" : ($(window).height() - $('.blockTitle').outerHeight())/2
	},500);
	$(".header").css("z-index", 1);
	$(".header").navFixed(); 
});






	
	
	






	
// JavaScript Document
