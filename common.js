
var windowSize = $(window).width();

//if(windowSize > 483) {$('.vis').attr("id",'');}; 

$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Я скоро свяжусь с вами.");
			$("#form").trigger("reset");
			if(windowSize < 482) {$('.vis').attr("id",'hidden');
		} else 
			{$('.vis').attr("id",'');
		}
		});
		return false;
	});
	
});


$(document).ready(function() {

	$("#formb").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Я скоро свяжусь с вами.");
			$("#formb").trigger("reset");
			$('.fb').attr("id",'hidden');
		});
		return false;
	});
	
});