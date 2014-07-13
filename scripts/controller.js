function setSlide(i){
    $("#container").animate({
        left: ""+(-(window.innerWidth*i))
    }, 600 );
    history.pushState(null, null, "?slide="+i);
}
function init(){
    window.slides = document.getElementsByClassName("slide");
    slides[0].contentDocument.onclick = function(){
        setSlide(1);
    };
    setSlide(getParam("slide"));
};
function size(){
    for (var i=0; i<slides.length; i++){
        slides[i].height = window.innerHeight;
        slides[i].width = window.innerWidth;
    }
}
window.onload = function(){
    init();
    size();
};
window.onresize = function(){
    size();
};