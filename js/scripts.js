console.log('test');
$("#myBox").on("click", function(){
    $(this).css("background", "rgb(0, 180, 0)");
    $(this).unbind("click");
   ; $("#myBox .material-symbols-outlined").show();
})
$(".box").prepend('<span class="material-symbols-outlined">expand_content</span>');
$(".material-symbols-outlined").hide();
var isOpen=false;
$(".material-symbols-outlined").on("click", function(){
    if(isOpen==false){
        $(".box").hide();
        $(this).parent().fadeIn();
        $(this).parent().css("transform", "scale(1.5)");
        $(this).text("close");
        isOpen=true;
    }
    else if(isOpen==true){
        $(".box").show();
        $(this).parent().css("transform", "scale(1)");
        $(this).text("expand_content");
        isOpen=false;
    }
});
$(document).on("keypress", function(e){
    if(e.key=='a'){
        $("#myBox").css("background-image", "url(img/1.png)").css("background-size", "half");
    }
    if(e.key=='b'){
        $("#myBox").css("background-image", "url(img/2.png)").css("background-size", "half");
    }
})