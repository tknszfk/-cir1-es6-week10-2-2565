function sum(...args) {
    let total = 0
    for (const a of args) {
        total = total + a
    }
    return {a,b,total} //object
}

const {a,b,total} = sum('Mark Zuckerberg',10, 20, 30, 40, 50,60)
console.log(`${a} ${b} ${total}`)