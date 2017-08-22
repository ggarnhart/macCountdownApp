$(document).ready(function(){
    addNew();
});

function addNew(){
    var winHeight = $(window).height();
    var winWidth = $(window).width();
    $(".new").css({"height":winHeight+"px", "width":winWidth+"px"});
    $(".new").fadeIn("slow");
};

function finality(result){
    console.log(result);
    if(result){
        var titleText = $("#title").val();
        
        var date = $("#date").val();
        //$(".new").css("display", "none");
        $(".new").fadeOut("slow");
        createItem(titleText, date);
    } else {
        console.log(result);
        $(".new").fadeOut("slow");
    }
};

function createItem(title, date){
    var days = dayCounter(date);
    $(".container").append("<div class='timer'><h4>"+title+"</h4><p>"+days+" Days </p> <div class='line'></div>");
};

function dayCounter(date){
    
    date = date.split("-");
    var timeStampDate = date[0]+"/"+date[1]+"/"+date[2];
    timeStampDate = String(timeStampDate);
    
    var stamp = new Date(timeStampDate).getTime();
    console.log(stamp);
    //stamp that date's timestamp now. Wow.
    
    var now = new Date().getTime();
    console.log(now);
    
    length = stamp-now;
    console.log(length);
    return 3;
};