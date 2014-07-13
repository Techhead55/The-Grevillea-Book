function getParam(key){
    return window.location.search.split(/[&?]+/).slice(1).filter(function(v, i, o){
        if (v.split("=")[0]===key) return v;
    }, this)[0].split("=")[1];
}