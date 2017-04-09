"use strict"

$(document).ready(function(){
	// Focus on Load
	$(window).on("load",function(){
		$('.ah').focus();
	});

	// Funciones Botones
	$(".btn0").click(function() { 
		$(".cont").removeClass('cont1 cont2 cont3 cont4');
		$(".cont").addClass("cont");
		$(".btn1, .btn2, .btn3, .btn4").removeClass('nst');
		$(".btn0").addClass("nst");				     
		$('.ah').focus();
	});

	$(".btn1").click(function() {  
		$(".cont").removeClass('cont0 cont2 cont3 cont4');
		$(".cont").addClass("cont1");
		$(".btn0, .btn2, .btn3, .btn4").removeClass('nst');
		$(".btn1").addClass("nst");				    
		$('.ah').focus();
	});

	$(".btn2").click(function() { 
		$(".cont").removeClass('cont0 cont1 cont3 cont4'); 
		$(".cont").addClass("cont2");
		$(".btn0, .btn1, .btn3, .btn4").removeClass('nst');
		$(".btn2").addClass("nst");				    
		$('.ah').focus();
	});

	$(".btn3").click(function() {
		$(".cont").removeClass('cont0 cont1 cont2 cont4'); 
		$(".cont").addClass("cont3");
		$(".btn0, .btn1, .btn2, .btn4").removeClass('nst');
		$(".btn3").addClass("nst");				    
		$('.ah').focus();
	});

	$(".btn4").click(function() {
		$(".cont").removeClass('cont0 cont1 cont2 cont3'); 
		$(".cont").addClass("cont4");		
		$(".btn0, .btn1, .btn2, .btn3").removeClass('nst');
		$(".btn4").addClass("nst"); 			    
		$('.ah').focus();
	});
			
});
