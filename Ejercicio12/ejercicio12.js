
//Ejercicio 12
const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(param) {
  
  const uniqueSet = new Set(param);
  const uniqueArray = Array.from(uniqueSet);

  return uniqueArray;
}

console.log(removeDuplicates(duplicates));
