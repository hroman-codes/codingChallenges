function puzzleArangements(pieces, targetSize) {
    let runningTotal = 0;
    let count = 0;
  
    debugger
    for (let i = 0; i < pieces.length; i++) {
      let pointerOne = pieces[i];
      console.log(pointerOne)
      debugger
      if (pointerOne === targetSize) count++

      for (let j = i + 1; j < pieces.length; j++) {
        let pointerTwo = pieces[j];
        runningTotal = pointerOne + pointerTwo
        if (runningTotal < targetSize) continue
        if (runningTotal === targetSize) {
            count++
            runningTotal = 0;
            break
        }
        if (runningTotal > targetSize) {
            runningTotal = 0;
            break
        }
          
        console.log(pointerTwo)
      }
    }
  
    return count
  }
  
  // Test 
//   console.log(puzzleArangements([1,2,3], 3))
  console.log(puzzleArangements([1,1,1], 2))
