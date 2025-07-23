let myPromise = new Promise((resolve,reject)=>{
    let random = Math.floor(Math.random()*10 + 1)
    if (random>5){
        setTimeout(() => {
            console.log('Done');
            resolve("resolved")
        }, 2000);
    }
    else{
        setTimeout(() => {
            console.log('Incomplete');
            reject("Rejected")
        }, 2000);
    }
})

myPromise.then((args)=>{
    console.log(args);
}).catch((error)=>{
    console.log(error);
})