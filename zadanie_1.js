/* Polecenie: wypisz wszystkie elementy tablicy  const numbers = [2, 5, 7, 10, 34, 16, 879, 1].
 */

const numbers = [2, 5, 7, 10, 34, 16, 879, 1];

console.log('_____________sposób 1____________________________');
numbers.forEach(function(item) {
  console.log(item);
});

console.log('______________sposób 2___________________________');
numbers.forEach(item => console.log(item));

console.log('______________sposób 3___________________________');
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}