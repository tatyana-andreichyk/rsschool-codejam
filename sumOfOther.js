function sumOfOther(arr){
    const newArr = [];
    
    const resultSum = arr.reduce(function(sum, current) {
        return sum + current;
    }, 0);
    
    for (let i = 0; i < arr.length; i++){
        newArr.push(resultSum - arr[i]);     
    }
    
    return newArr;
}

console.log(sumOfOther([2, 3, 4, 1]));
