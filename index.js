// Add your functions here
function map(srcArray, fn) {
    let newArray = []
    for (let i = 0; i<srcArray.length; i++) {
        newArray.push(fn(srcArray[i]))
    }
    return newArray
}

function reduce(srcArray, fn, startValue) {
    let r = (!!startValue) ? startValue : srcArray[0]
    let i = (!!startValue) ? 0 : 1
    for (; i<srcArray.length; i++) {
        r = fn(srcArray[i], r)
    }

    return r;
}
