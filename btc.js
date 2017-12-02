$(document).ready(function(){
$.ajax({
	url: "https://api.coindesk.com/v1/bpi/currentprice.json",
	 type: "GET",
	 contentType: "application/json",
	 success: function(data ){
	 	var json=JSON.parse(data);	 	
	 	var rate= json["bpi"]["USD"]["rate"];
	 	$("#rate").html(rate);
	 }

});

});
