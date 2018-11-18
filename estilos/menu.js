$(document).ready(function() 
{
	var flag = false;
	var scroll;
	alert("Hola");
	$(window).scroll(function(){

		scroll=$(window).scrollTop();

		if (scroll>200) 
		{
			$("#LogoVertical").css({"margin-top":"-5px","width":"250px","height":"50px"});	
		}
		else
		{
			$("#LogoVertical").css({"margin-top":"100px","width":"350px","height":"150px"});
		}

	});

});