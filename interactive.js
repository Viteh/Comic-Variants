$(document).ready(function(){
    //If "Got it!" is checked it loses the opacity
    $(document).on("click", "input[type='checkbox']", function(){
        if($(this).is(":checked")){
            $(this).parent().siblings("img").removeClass("trans"); 
        }else{
            $(this).parent().siblings("img").addClass("trans");  
        }
    });
    //Hide the filter when not in use
    $("#types").hide();
    $("#arcs").hide();
    $(".filter h3").mouseover(function(){
        $("#types").show();
    });
    $(".wrapper").mouseover(function(){
        $("#types").hide();
    });
    
    //Calls the JSON with the data, atm it's just a variable
    var variantes;
    /* $.ajax({
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

    loadVariantes(); */

    variantes={"issues":[
        {
            "cover": "01A",
            "type": "main",
            "back": "I want everything you have.",
            "title": "Issue #1: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "01B",
            "type": "main",
            "back": "Maybe we didn't want to scare the shit out of you?",
            "title": "Issue #1: Cover B",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "01C",
            "type": "alternate",
            "back": "I want everything you have.",
            "title": "Issue #1: Cover C",
            "artist": "A: Bryan Lee O'Malley",
            "arc": "faust" 
        },
        {
            "cover": "02A",
            "type": "main",
            "back": "You spend all your life wishing you were special and then you find out you are.",
            "title": "Issue #2: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "02B",
            "type": "alternate",
            "back": "You spend all your life wishing you were special and then you find out you are.",
            "title": "Issue #2: Cover B",
            "artist": "A: Chip Zdarsky",
            "arc": "faust" 
        },
        {
            "cover": "03A",
            "type": "main",
            "back": "Killing you is too quick a thing. Better to destroy you.",
            "title": "Issue #3: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "03B",
            "type": "alternate",
            "back": "Killing you is too quick a thing. Better to destroy you.",
            "title": "Issue #3: Cover B",
            "artist": "A: Stephanie Hans",
            "arc": "faust" 
        },
        {
            "cover": "04A",
            "type": "main",
            "back": "When you are as good as I am? This is humble.",
            "title": "Issue #4: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "04B",
            "type": "alternate",
            "back": "When you are as good as I am? This is humble.",
            "title": "Issue #4: Cover B",
            "artist": "A: Kevin Wada",
            "arc": "faust" 
        },
        {
            "cover": "05A",
            "type": "main",
            "back": "If you exist, you're staring at me.",
            "title": "Issue #5: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "faust" 
        },
        {
            "cover": "05B",
            "type": "alternate",
            "back": "If you exist, you're staring at me.",
            "title": "Issue #5: Cover B",
            "artist": "A: Becky Cloonan",
            "arc": "faust" 
        },
        {
            "cover": "06A",
            "type": "main",
            "back": "I've got no reason to be afraid any more.",
            "title": "Issue #6: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "06B",
            "type": "alternate",
            "back": "I've got no reason to be afraid any more.",
            "title": "Issue #6: Cover B",
            "artist": "A: David LaFuente",
            "arc": "fand" 
        },
        {
            "cover": "07A",
            "type": "main",
            "back": "I'm a god, not a saint.",
            "title": "Issue #7: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "07B",
            "type": "alternate",
            "back": "I'm a god, not a saint.",
            "title": "Issue #7: Cover B",
            "artist": "A: Christian Ward",
            "arc": "fand" 
        },
        {
            "cover": "08A",
            "type": "main",
            "back": "Being happy for a night. That's not a small thing.",
            "title": "Issue #8: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "08B",
            "type": "alternate",
            "back": "Being happy for a night. That's not a small thing.",
            "title": "Issue #8: Cover B",
            "artist": "A: Brandon Graham",
            "arc": "fand" 
        },
        {
            "cover": "09A",
            "type": "main",
            "back": "Life' is the last thing I have, boy.",
            "title": "Issue #9: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "09B",
            "type": "alternate",
            "back": "Life' is the last thing I have, boy.",
            "title": "Issue #9: Cover B",
            "artist": "A: Marguerite Sauvage",
            "arc": "fand" 
        },
        {
            "cover": "10A",
            "type": "main",
            "back": "If I'm going to hell, you're all coming with me.",
            "title": "Issue #10: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "10B",
            "type": "alternate",
            "back": "If I'm going to hell, you're all coming with me.",
            "title": "Issue #10: Cover B",
            "artist": "A: Frazer Irving",
            "arc": "fand" 
        },
        {
            "cover": "11A",
            "type": "main",
            "back": "No one gets a happy ending.",
            "title": "Issue #11: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "fand" 
        },
        {
            "cover": "11B",
            "type": "alternate",
            "back": "No one gets a happy ending.",
            "title": "Issue #11: Cover B",
            "artist": "A: Fiona Staples",
            "arc": "fand" 
        },
        {
            "cover": "12A",
            "type": "main",
            "back": "I loved him.",
            "title": "Issue #11: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "12B",
            "type": "alternate",
            "back": "I loved him.",
            "title": "Issue #11: Cover B",
            "artist": "A: Kate Brown",
            "arc": "comsui" 
        },
        {
            "cover": "13A",
            "type": "main",
            "back": "Looking good, girl",
            "title": "Issue #13: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "13B",
            "type": "alternate",
            "back": "Looking good, girl",
            "title": "Issue #13: Cover B",
            "artist": "A: Tula Lotay",
            "arc": "comsui" 
        },
        {
            "cover": "14A",
            "type": "main",
            "back": "You're not stupid, are you? Just evil.",
            "title": "Issue #11: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "14B",
            "type": "alternate",
            "back": "You're not stupid, are you? Just evil.",
            "title": "Issue #11: Cover B",
            "artist": "A: Grimes",
            "arc": "comsui" 
        },
        {
            "cover": "15A",
            "type": "main",
            "back": "You're doing this wrong.",
            "title": "Issue #15: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "15B",
            "type": "alternate",
            "back": "You're doing this wrong.",
            "title": "Issue #15: Cover B",
            "artist": "A: Stephanie Hans",
            "arc": "comsui" 
        },
        {
            "cover": "16A",
            "type": "main",
            "back": "You were always best at the game.",
            "title": "Issue #16: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "16B",
            "type": "alternate",
            "back": "You were always best at the game.",
            "title": "Issue #16: Cover B",
            "artist": "A: Del Duca C: Lopes",
            "arc": "comsui" 
        },
        {
            "cover": "17A",
            "type": "main",
            "back": "Are you ready?",
            "title": "Issue #17: Cover A",
            "artist": "A: McKelvie C: Wilson",
            "arc": "comsui" 
        },
        {
            "cover": "17B",
            "type": "alternate",
            "back": "Are you ready?",
            "title": "Issue #17: Cover B",
            "artist": "A: Brandon Graham",
            "arc": "comsui" 
        }

    ]}
    //When you click on a filter option it adds those covers 
    $("#types li p").on("click", function(e){
        var typ = this.id;
        var newIssues="";
        for (var i=0; i < variantes["issues"].length; i++) {
            if (variantes["issues"][i].type==typ){
                newIssues+="<li class="+typ+"><img class=\"responsive trans\" src=\"covers/"+variantes["issues"][i].cover+".jpg\" title=\""+variantes["issues"][i].back;
                newIssues+="\"><p>"+variantes["issues"][i].title+"</p><p class=\"artists\">"+variantes["issues"][i].artist+"</p><form class=\"forma\"><input type=\"checkbox\">Got it!</form><button class=\"forma\" type=\"button\">Find it!</button></li>";
            };
        };
        if(!$(this).hasClass("active")){
            $("div."+typ).append(newIssues);
            $(this).addClass("active");
        }else{
            $("li."+typ).remove();
            $(this).removeClass("active");
        };
    });
    
});