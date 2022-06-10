const $headercontainer = document.querySelector(".pinning-header-container");
console.log($headercontainer)

document.addEventListener('scroll', function() {
    const currentScrollValue = document.documentElement.scrollTop;
    if(currentScrollValue == 0){
        $headercontainer.style.backgroundColor = "transparent";
        $headercontainer.classList.remove("fadeinanimation")
        $headercontainer.classList.add("fadeoutanimation")
    }else{
        $headercontainer.style.backgroundColor = "rgb(20, 20, 20)";
        $headercontainer.classList.add("fadeinanimation")
        $headercontainer.classList.remove("fadeoutanimation")
    }
});