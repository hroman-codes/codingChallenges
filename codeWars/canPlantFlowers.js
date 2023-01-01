function canPlantFlowers(flowerBed, newFlowers) {
    let newFlowersCount = newFlowers;
  
    debugger
    for (let i = 0; i < flowerBed.length; i++){
      let currentEl = flowerBed[i];
      const prevPointer = flowerBed[i - 1];
      const nextPointer = flowerBed[i + 1];
  
      debugger
      if (currentEl === 0 && prevPointer === 0 && nextPointer === 0) {
        currentEl = 1;
        newFlowersCount --;
      }
  
      debugger
      if (newFlowersCount === 0) return true
    }
  
    console.log(flowerBed)
    return false
  }
  
  
  console.log(canPlantFlowers([0, 1, 0, 0, 0, 1],  1)) // True 
