function countExactOccurrences(arr, exactOccurrences){
    const frequencyMap = new Map();
    let tracker = 0;
  
    if (arr.length === 0) return tracker
    debugger
    for (const value of arr){
      let count = (frequencyMap.get(value) || 0) + 1;
      frequencyMap.set(value, count)
  
      if (count === exactOccurrences) {
        tracker ++
      } else if (count === exactOccurrences + 1) {
          tracker = tracker > 0 ? tracker - 1 : 0;
      }
    }
  
    return tracker
  
  }
  
  // console.log(countExactOccurrences([1, 2, 3, 1, 2, 3], 2)); // 3
  // console.log(countExactOccurrences([1, 2, 3, 1, 2, 3, 3], 2)); // 2
  // console.log(countExactOccurrences([], 2)); // 2
  console.log(countExactOccurrences([1, 3, 3, 5, 5, 5, 5, 5, 3], 3)); // 1
                                          //  ^