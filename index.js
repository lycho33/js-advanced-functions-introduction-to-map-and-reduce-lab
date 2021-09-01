// Your code here
// function mapToNegativize(sourceArray) {
//     return sourceArray.map(value => value * -1)
// }

// function mapToNoChange(sourceArray) {
//     return sourceArray
// }

// function mapToDouble(sourceArray) {
//     return sourceArray.map(value => value * 2)
// }

// function mapToSquare(sourceArray) {
//     return sourceArray.map(value => value ** 2)
// }

// //REDUCE
// function reduceToTotal(sourceArray, startingPoint = 0) { //default value allows the 2nd argument to be optinal
//     return sourceArray.reduce(function(total, startingPoint)
//     {return total += startingPoint}, startingPoint) //startingPoint is the 2nd argument for reduce
// }

// function reduceToAllTrue(sourceArray) {
//     sourceArray.reduce((array, value) => array && !sourceArray(value), true)}

function mapToNegativize(sourceArray){
    return sourceArray.map(e => -e)
}

function mapToNoChange(sourceArray){
    return sourceArray.map(e => e)
}

function mapToDouble(sourceArray){
    return sourceArray.map(e => e * 2)
}

function mapToSquare(sourceArray){
    return sourceArray.map(e => e ** 2)
}

//REDUCE
function reduceToTotal(sourceArray, startingPoint = 0) { //default value allows the 2nd argument to be optinal
    return sourceArray.reduce(function(total, startingPoint)
    {return total += startingPoint}, startingPoint) //startingPoint is the 2nd argument for reduce
}

function reduceToAllTrue(sourceArray){
    return sourceArray.reduce(function(total, startingPoint) {
        if (!total){
            return false
        }
        if (total === true){
            return true
        }
    })
}

function reduceToAnyTrue(sourceArray){
    return sourceArray.reduce(function(value){
        if (typeof value !== 'undefined' ){
            return true
        } else if (typeof value === 'undefined' || value === null){
            return false
        }
    })
}