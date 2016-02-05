$(document).ready(function(){
    $("input[type='checkbox']").change(function(){
    	if($(this).is(":checked")){
        	$(this).parent().siblings("img").removeClass("trans"); 
    	}else{
        	$(this).parent().siblings("img").addClass("trans");  
    	}
	});
    $("#types").hide();
    $("#arcs").hide();
    $(".filter h3").mouseover(function(){
    	$("#types").show();
    });
    $(".wrapper").mouseover(function(){
    	$("#types").hide();
    });
});