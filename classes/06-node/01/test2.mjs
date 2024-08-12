function tellTime() {
    const now = new Date()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    console.log(`Time: ${hours}:${minutes}`)
}

function sayHi() {
    console.log('Hi')
}

// esm
export { tellTime, sayHi }