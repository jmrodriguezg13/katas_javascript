
//Ejercicio 10
const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(param) {
  let sum = 0;
  for (let num of param) {
    if (typeof num === 'number') {
      sum += num;
    }
  }

  return sum / param.length;

}

console.log(average(numbers));


