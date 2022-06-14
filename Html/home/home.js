
const $questionbox = document.querySelectorAll(".question-box")
// console.log($questionbox)

$questionbox.forEach(function(ele,index){
        console.log(ele)
        ele.addEventListener("toggle", event => {
        if (ele.open) {
            ele.children[0].children[0].style.transform = "translateY(-50%)";
        } else {
            ele.children[0].children[0].style.transform = "";
        }
    });
    }
);



