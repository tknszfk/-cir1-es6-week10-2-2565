//function
function greet(name,callback) {
    console.log(name)
    callback()
}

function callMe() {
    console.log('I am callback function')
}
//passing fucntion as an arguments
greet('Peter',callMe)