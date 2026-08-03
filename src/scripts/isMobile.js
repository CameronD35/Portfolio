window.isMobile = function(){
    console.log(window)
    return window.matchMedia("(hover:none)").matches;
};