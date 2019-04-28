let options = {
    width: 1024,
    height: 1024,
    name: 'test'
}

console.log(options.name)

options.bool = false;
options.colors = {
    border: 'black',
    bg: 'red'
}

delete options.bool;

console.log(options);

for (let key in options) {
    console.log('свойство ' + key + ' имеет значение ' + options[key]);
}

console.log(Object.keys(options).length)

let arr = ['first',2,3,'four',5];

// arr.pop();
// arr.push('5');
// arr.shift();
// arr.unshift('1');

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + "(массив: " + mass + ')' )
// });

// console.log(arr);

// let mass = [1,3,4,6,7];
// for(let key of mass) {
//     console.log(key);
// }

let ans = prompt('', ''),
    arr = [];

    arr = ans.split(',');
    console.log(arr);