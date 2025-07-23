const callback = (arg) => {
    return arg
}

let fn = (callback) => {
    let div = document.createElement("div")
    div.innerHTML += callback
    document.body.append(div)
}
