function getRandomColor (){
    let color1 = Math.floor(Math.random()*255)
    let color2 = Math.floor(Math.random()*255)
    let color3 = Math.floor(Math.random()*255)
    let final_color = `rgb(${color1},${color2},${color3})`
    return final_color
}

let container = document.querySelector(".container")
let childContainer = document.querySelector(".childContainer")
let child = document.querySelector(".child")

setInterval(() => {
    container.style.backgroundColor = getRandomColor()
    container.style.borderColor = getRandomColor()
}, 500);
setInterval(() => {
    childContainer.style.backgroundColor = getRandomColor()
    childContainer.style.borderColor = getRandomColor()
}, 250);
setInterval(() => {
    child.style.backgroundColor = getRandomColor()
    child.style.borderColor = getRandomColor()
}, 100);


container.addEventListener("click", (e)=>{
    e.stopPropagation()
    clearInterval(1)
})
childContainer.addEventListener("click", (e)=>{
    e.stopPropagation()
    clearInterval(2)
})
child.addEventListener("click", (e)=>{
    e.stopPropagation()
    clearInterval(3)
})

