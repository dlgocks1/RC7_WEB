const $headercontainer = document.querySelector(".pinning-header-container");
const $searchTab = document.querySelector(".searchTab");
const $searchInput = document.querySelector(".searchInput");
const $vedio = document.querySelector("#vedio");

$searchTab.addEventListener('click',()=>{
    $searchTab.style.display = "none"
    $searchInput.style.display = "flex"
    document.querySelector("#searchInput").focus();
})

$searchInput.addEventListener('focusout',()=>{
    $searchTab.style.display = "inline-block"
    $searchInput.style.display = "none"
})


$vedio.addEventListener('ended', function(){
    $vedio.style.display = "none"
});

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