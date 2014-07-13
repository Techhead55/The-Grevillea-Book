function setSlide(i){
    $("#container").animate({
        left: ""+(-(window.innerWidth*i))
    }, 600 );
    window.slide = i;
    history.pushState(null, null, "?slide="+i);
}
function setGenre(i){
    history.pushState(null, null, "?slide="+slide+"&genre="+i);
    window.genre = i;
}
function renderData(){
    for (genreElement in data.genres){
        var element = document.createElement("div");
        element.innerHTML = data.genres[genreElement].name;
        element.className = "menu";
        element.onclick = function(){
            setGenre(genreElement);
            setSlide(2);
        };
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
    slides[2].contentDocument.getElementById("back").onclick = function(){
        setSlide(1);
    };
    slides[3].contentDocument.getElementById("back").onclick = function(){
        setSlide(2);
    };
    setSlide(getParam("slide"));
    setGenre(getParam("genre"));
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