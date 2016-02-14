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
    
    var variantes;
    $.ajax({
        beforeSend: function(xhr){
            if(xhr.overrideMimeType){
                xhr.overrideMimeType("application/json");
            }
        }
    });
    
    function loadVariantes(){
        $.getJSON("issues.json")
        .done(function(data){
            variantes=data;
        }).fail(function(){
            $("#variants").html("Sorry, something went wrong!");
        });
    }

    loadVariantes();

    $("#types").on("click", function(e){
        var typ = this.id.toUpperCase();
        var newIssues="";
        for (var i=0; i < times["issues"].length; i++) {
            if (times["issues"][i].type=typ){
                newIssues+="<li><img class=\"responsive "+typ+"trans\" src=\"covers/"+times["issues"][i].cover+".jpg\" title=\""+times["issues"][i].back;
                newIssues+="\"><p>"+times["issues"][i].title+"</p><p class=\"artists\">"+times["issues"][i].artist+"</p><form class=\"forma\"><input type=\"checkbox\">Got it!</form><button class=\"forma\" type=\"button\">Find it!</button></li>";
            }
        }
        $("#variants").html(newIssues);
    });
    
});