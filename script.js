 $(document).ready(function(){
 	for(var i = 0; i<100; i++){
		var list= "";

		list+="<option>";
		list+=i;
		list+="</option>"
		$("#myID").append(list);

	}
 });