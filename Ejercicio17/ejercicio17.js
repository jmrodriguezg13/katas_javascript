//Ejercicio 17
const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
};

for (const property in alien) {
  console.log(alien[property]);
}
