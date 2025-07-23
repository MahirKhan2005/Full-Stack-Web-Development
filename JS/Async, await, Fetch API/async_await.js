console.log("Loding Module 1 ");


async function loadingModules() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Loading module 3");
            console.log("Loading module 4");
            resolve(1)
        }, 2000);
    })
}

async function main () {
    console.log("Loading module 2");
    console.log("Loading more modules");
    await loadingModules()
}
main()
