function solution(topping) {
    let splitCount = 0
    
    const toppingCounter = new Map();
    for (const item of topping) {
        toppingCounter.set(item, (toppingCounter.get(item) || 0) + 1)
    }
    
    const halfToppingSet = new Set();
    
    for (const item of topping) {
        halfToppingSet.add(item);
        toppingCounter.set(item, toppingCounter.get(item) - 1);
        
        if (toppingCounter.get(item) === 0) {
            toppingCounter.delete(item);
        }   
    
        if (halfToppingSet.size === toppingCounter.size){
            splitCount += 1
        }
    }
    
    return splitCount
}