function sayHello(name, callback) {
    let gretting = `Hello ${name}`
    callback(gretting)
}



function showGretings(gretting) {
    console.log(gretting)
}




sayHello('Arif', showGretings)

// sayHello('Arif', showGretings)