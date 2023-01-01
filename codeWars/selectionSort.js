function selectionSort(array) {
    debugger
    for (let i = 0; i < array.length; i++) {
      let min = i;
      debugger
      for (let j = i + 1; j < array.length; j++) {
        if (array[min] > array[j]) {
            debugger
          min = j;
        }
      }
      debugger
      if (min !== i) {
        debugger
        let tmp = array[i];
        array[i] = array[min];
        array[min] = tmp;
      }
    }
    debugger
    return array;
  }

  console.log(selectionSort([1, 3, 2]))
