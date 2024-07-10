let homeCount = document.getElementById("home-count")
let gustCount = document.getElementById("gust-count")

let homeAdd = 0
function homeAdd1(){
    homeAdd += 1
    homeCount.textContent = homeAdd
}
function homeAdd2(){
    homeAdd += 2
    homeCount.textContent = homeAdd
}
function homeAdd3(){
    homeAdd += 3
    homeCount.textContent = homeAdd
}





let gustAdd = 0
function gustAdd1(){
    gustAdd += 1
    gustCount.textContent = gustAdd
}
function gustAdd2(){
    gustAdd += 2
    gustCount.textContent = gustAdd
}
function gustAdd3(){
    gustAdd += 3
    gustCount.textContent = gustAdd
}
function newGame(){
    homeAdd = 0
    homeCount.textContent = homeAdd
    gustAdd = 0
    gustCount.textContent = gustAdd

}