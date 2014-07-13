function setSlide(i){
    $("#container").animate({
        left: ""+(-(window.innerWidth*i))
    }, 600 );
    history.pushState(null, null, "?slide="+i);
}
function renderData(){
    for (genre in data.genres){
        var element = document.createElement("div");
        element.innerHTML = data.genres[genre].name;
        element.className = "menu";
        slides[1].contentDocument.getElementById("menu-items").appendChild(element);
    }
};
function loadData(){
    var xhr = new XMLHttpRequest;
    xhr.open("GET", "data.json", true);
    xhr.send();
    xhr.onload = function(){
        window.data = JSON.parse(xhr.responseText);
        renderData();
    };
}
function init(){
    window.slides = document.getElementsByClassName("slide");
    slides[0].contentDocument.onclick = function(){
        setSlide(1);
    };
    slides[1].contentDocument.getElementById("back").onclick = function(){
        setSlide(0);
    };
    setSlide(getParam("slide"));
    loadData();
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