function getRandomNumber (){
    let color1 = Math.floor(Math.random()*255)
    let color2 = Math.floor(Math.random()*255)
    let color3 = Math.floor(Math.random()*255)
    let final_color = `rgb(${color1},${color2},${color3})`
    return final_color
}
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = getRandomNumber()
    element.style.color = getRandomNumber()
});