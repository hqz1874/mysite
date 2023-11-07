// 菜单栏选页卡
var menuitems = document.querySelectorAll(".nav li")
var boxes = document.querySelectorAll(".content>li")

for(var i=0 ; i < menuitems.length ;i++){
    menuitems[i].dataset.index = i
    menuitems[i].onclick = function(){
        var index = this.dataset.index
        for(var m=0 ; m < menuitems.length ; m++){
            menuitems[m].classList.remove("active")
            boxes[m].classList.remove("active")
        }
        menuitems[index].classList.add("active")
        boxes[index].classList.add("active")
        }
     }

// 背景设置
var btn1 = document.querySelector(".AnNiu")
var btn2 = document.querySelector(".AnNiu2")
var all_box = document.querySelector("#all-box")
var all_box_a = document.querySelector(".all-box-am")
var all_box_p = document.querySelector(".all-box-pm")

btn1.onclick = function(){
    all_box.classList.remove("all-box-am")
    all_box.classList.add("all-box-pm")
}
btn2.onclick = function(){
    all_box.classList.remove("all-box-pm")
    all_box.classList.add("all-box-am")
}