console.log('===============');
console.log('Задание 1:');
console.log('Удалите из массива дубликаты');

(function () {
    const arr = [1, 2, 3, 5, 1, 6, 2, 5, 6, 7];
    console.log(arr);
    console.log('РЕЗУЛЬТАТ:');
    console.log([...new Set(arr)]);
})();

console.log('===============');

console.log('Задание 2:');
console.log('Объедините 2 объекта в один');

(function () {
    const obj1 = { id: 1, name: 'userName' },
          obj2 = { id: 1, password: 'qwerty' };
    console.log(obj1);
    console.log(obj2);
    console.log('РЕЗУЛЬТАТ:');
    console.log({...obj1, ...obj2});
})();

console.log('===============');

console.log('Задание 3:');
console.log('Сократите объявление функции в одну строку, используя новый синтаксис ES6');

(function () {
    const func1 = function (x, y) { return x + y},
          func2 = (x, y) =>  x + y;
    console.log(func1(2,5));
    console.log('РЕЗУЛЬТАТ:');
    console.log(func2(2,5));
})();

console.log('===============');

console.log('Задание 4:');
console.log('Напишите функцию, с помощью которой можно будет выполнять различные действия с задержкой');

(function () {
    const sleep = ms => {
        return new Promise((resolve) => setTimeout(resolve, ms))
    };

    console.log('Подождите...');

    // Её использование для выполнения действия с задержкой 5 секунд
    sleep(5000).then(() => {
        console.log('Выполнилось через 5 секунд!')
    });

    sleep(11000).then(() => {
        console.log('УРОК ОКОНЧЕН');
    });
})();