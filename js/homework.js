// JavaScript Document
$(document).ready(function () {

	$('.skylanders img').hide();
	$('.nav li').css("background-color", "#3399CC");

	$('.tab1').on('click', function () {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab1').css("background-color", "#66FFFF");
		$('.skylanders img:not(.zap)').fadeOut(500, function() {
			$('.skylanders .zap').fadeIn();
		});
	});
	
	$('.tab2').on('click', function () {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab2').css("background-color", "#66FFFF");
		$('.skylanders img:not(.hex)').fadeOut(500, function() {
			$('.skylanders .hex').fadeIn();
		});
	});
	
	$('.tab3').on('click', function () {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab3').css("background-color", "#66FFFF");
		$('.skylanders img:not(.whirlwind)').fadeOut(500, function() {
			$('.skylanders .whirlwind').fadeIn();
		});
	});
	
	$('.tab4').on('click', function () {
		$('.nav li').css("background-color", "#3399CC");
		$('.tab4').css("background-color", "#66FFFF");
		$('.skylanders img:not(.sunburn)').fadeOut(500, function() {
			$('.skylanders .sunburn').fadeIn();
		});
	});
	
}); 