
//Ejercicio 11
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  
  let sum = 0;
  let count = 0;

  for (const element of param) {
    if (typeof element === 'number'){
      sum+= element;
    }
    
    else if (typeof element === 'string') {
      sum += element.length;
    }
    count++;
  }

  return sum / count;

}

console.log(averageWord(mixedElements));

