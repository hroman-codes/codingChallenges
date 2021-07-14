function minMoves(arr) {

    let sortedArray = []
    let counter = 0;

    for (let i  = 0; i < arr.length; i++) {
        let currentNum = arr[i];

        console.log(currentNum)
        if (currentNum === 0) {
            sortedArray.push(currentNum)
            counter++
        } else {
            sortedArray.unshift(currentNum)
            counter++
        }
    }
    console.log(counter)
    console.log(sortedArray)
}

console.log(minMoves([1,0,1,0,1,0,1]));