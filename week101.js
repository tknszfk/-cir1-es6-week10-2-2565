//declaeative function
function hello(msg,name,age) {
    //console.log(`${msg} ${name} ${age}`)
    return {msg,name,age}  //object
}

const result = hello('Hello world!', 'Mark Zuckerberg', 25)//called function
console.log(`${result.msg} ${result.name} ${result.age}`)