function sumAll(numbers) {
    let sum = 0;
    for (let num of numbers) {
      sum += num;
    }
    return sum;
  }
  
  console.log(sumAll([2, 5, 6, 7])); 
  console.log(sumAll([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 