var transformArrToLowerCase = arr => {
   let map = arr.map(Arr => {
      return Arr.toLowerCase();
    });
  return map;
};

console.log(transformArrToLowerCase(['BUDI', 'MArNi', 'mukIDi'])); 


var filterArrUnder10 = arr => {
   let filter = arr.filter(Arr => {
    if(Arr>10) return true; else return false;
  })
  return filter;
};

console.log(filterArrUnder10([1, 5, 12, 15, 20])); 


var reduceFindMaximum = arr => {
  let reduce = arr.reduce((accumulator,currentValue) => {
    return Math.max(accumulator, currentValue);
  });

  return reduce;
}
console.log(reduceFindMaximum([5, 1, 7, 6, 9])); 