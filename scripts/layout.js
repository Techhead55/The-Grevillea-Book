var content = {
    realism: [{
        title: "Alone",
        author: "Nicholas Houseman"
    }, {
        title: "You Jump, I Jump",
        author: "Laura Bruce-Smith"
    }, {
        title: "Alone",
        author: "Nicholas Houseman"
    }, {
        title: "You Jump, I Jump",
        author: "Laura Bruce-Smith"
    }, {
        title: "Alone",
        author: "Nicholas Houseman"
    }, {
        title: "You Jump, I Jump",
        author: "Laura Bruce-Smith"
    }, {
        title: "Alone",
        author: "Nicholas Houseman"
    }, {
        title: "You Jump, I Jump",
        author: "Laura Bruce-Smith"
    }]
};
function item(left, top, colour, meta, location) {
    var element = document.createElement("div"),  
        title = document.createElement("div"),  
        author = document.createElement("div");
    element.className = "menu-item";
    element.style.left = left + "px";
    element.style.top = top + "px";
    element.style.backgroundColor = colour;
    title.innerText = meta.title;
    title.id = "menu-title";
    author.innerText = meta.author;
    author.id = "menu-title";
    element.appendChild(title);
    element.appendChild(author);
    document.getElementById(location).appendChild(element);
}
function layout (genre) {
    var left = 0,
        meta = {
            title: "The Awesome",
            author: "Nathan Horton"
        };
    for (var i=0; i < content[genre].length; i++) {
        item(left, 0, "red", meta, "bod")
        left += 120px;
    }
}