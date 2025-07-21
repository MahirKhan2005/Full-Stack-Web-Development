document.querySelector(".hidden-card").classList.add("hidden")
function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let hiddenCard = document.body.querySelector(".hidden-card")
    let container = document.body.querySelector(".container")
    const clone = hiddenCard.cloneNode(true)
    clone.classList.remove("hidden")
    container.append(clone)
    clone.querySelector(".title").textContent = title
    clone.querySelector(".channel-name").textContent = cName
    if (views >= 1000 && views<1000000) {
        clone.querySelector(".views").textContent = views/1000 + "K views"
    }
    else if (views>=1000000){
        clone.querySelector(".views").textContent = views/1000000 + "M views"

    }
    else{
        clone.querySelector(".views").textContent = views + " views"

    }
    if (monthsOld<2){

        clone.querySelector(".months").textContent = monthsOld + " month"
    }
    else{
        clone.querySelector(".months").textContent = monthsOld + " months"

    }
    clone.querySelector(".duration").textContent = duration
    clone.querySelector("img").src = thumbnail

}

createCard("Sigma Web development", 'CodeWithHarry',"5300000", "2", "31:20","https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDf-xrqgUw55JSfKsoykKVhngkzRA")
createCard("Best Resources to master DSA in 2025!", 'NishantChahar',"39000", "1", "42:10","https://i.ytimg.com/vi/PgXumHHJ8Sc/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDo-zvWbT2CmoxWS2y_C7KVbu_LSA")