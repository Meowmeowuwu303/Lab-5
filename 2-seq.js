'use strict';

function array() {
  const data = [];
  
  const accessor = (index) => data[index];
  
  accessor.push = (value) => data.push(value);
  accessor.pop = () => data.pop();
  
  return accessor;
}

// Тестування
const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); // Виводить: first
console.log(arr(1)); // Виводить: second
console.log(arr(2)); // Виводить: third

console.log(arr.pop()); // Виводить: third
console.log(arr.pop()); // Виводить: second
console.log(arr.pop()); // Виводить: first
console.log(arr.pop()); // Виводить: undefined
