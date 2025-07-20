document.querySelectorAll(".box").forEach(e => {

    e.style.backgroundColor = "green"
});

document.getElementsByClassName("box")[3].style.backgroundColor = "red"

// Targets only the first element with the class box
document.querySelector(".box").style.backgroundColor = "skyblue"

// Targets all the elements with the tag div
console.log(document.getElementsByTagName("div"))