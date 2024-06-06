//Ejercicio 9******
const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {

  let sum = 0;
  for (let num of param) {
    if (typeof num === 'number') {
      sum += num;
    }
  }

  return sum;
}

console.log(sumAll(numbers));

