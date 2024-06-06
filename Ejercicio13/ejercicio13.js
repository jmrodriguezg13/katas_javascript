//Ejercicio 13
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function finderName(array, element) {
  if (array.includes(element)) {
      return `${true}, posicion: ${array.indexOf(element)}`
  } else {
      return false;
  }
}

finderName();
