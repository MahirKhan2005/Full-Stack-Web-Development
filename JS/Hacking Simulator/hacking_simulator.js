let messages = ['Initializing Hacking', 'Initialized Hacking now reading your data','Reading your Files','Password files Detected','Sending all passwords and personal files to server','Cleaning up']
async function dots(element){
    for(let i=0;i<3;i++){
        await new Promise(resolve=>setTimeout(resolve,500))
        element.innerHTML+=". "
    }
}
async function addItem(element){
    let div = document.createElement("div")
    div.classList.add("container")
    div.innerHTML = element
    document.body.append(div)
    await dots(div)
}
function randomDelay(){
    let random = Math.floor(Math.random()*6+1)
    return random
}
async function main(){
    for (const element of messages) {
        
        let delay = randomDelay()
        await new Promise(resolve=>setTimeout(resolve,1000*delay))
        await addItem(element)
    }
}
main()