//Ejercicio 22
const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const finalfood = [];

for (let food of foodSchedule) {
  if (food.isVegan) {
    finalfood.push(food.name); 
  } else {
  
    if (fruits.length > 0) {
      finalfood.push(fruits.shift());
    } else {
      finalfood.push(food.name);
    }
  }
}

console.log(finalfood);


