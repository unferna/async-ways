const doSomethingAsync = () => new Promise((resolve, reject) => {
    if( !true ) {
        setTimeout(() => resolve('Do something async'), 3000)

    } else {
        reject(new Error('Test Error'))
    }
})

const doSomething = async () => {
    const something = await doSomethingAsync()
    console.log(something);   
}

// console.log("Before 1")
// doSomething()
// console.log("After 1")

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync()
        console.log(something);
        
    } catch (error) {
        console.error(error)
    }
}

console.log("Before 2")
anotherFunction()
console.log("After 2")