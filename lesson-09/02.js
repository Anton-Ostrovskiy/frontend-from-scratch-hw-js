/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

const numbers = [1, 2, 3, 4, 5]

const map = (numbers, callback) => {
  const newArray = [];
  for(let index =0; index < numbers.length; index++){
    const element = numbers[index];

      const result = callback(element,index)
      newArray.push(result);

  }
  return newArray;
}

const doubledNumbers = (element)=> {
  return element * 2;
}

console.log(map(numbers,doubledNumbers));
