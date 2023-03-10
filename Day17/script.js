//1 Given an array, write an ES6 function that returns the total length of all the strings in an array.

const strings = ["apple", "banana", "cherry", "date", "blueberry"];
// Your code here

const totalLength = strings => strings.reduce((acc, str)=>acc+ str.length, 0)


console.log(totalLength(strings));

// Output: 30






//2 Write an ES6 function sumSquares that takes an array of numbers and returns the sum of the squares of all the numbers in the array

const numbers = [1, 2, 3, 4, 5];
// Your code here

const sumSquares = numbers => numbers.reduce((acc, num)=>acc + num*num,0)



console.log(sumSquares(numbers));
 // Output: 55 





 //3 Write an ES6 function that calculates and returns the total value of all items in an array of objects.

const items = [
    { name: "Item 1", price: 10 },
    { name: "Item 2", price: 20 },
    { name: "Item 3", price: 30 }
  ];
  // Your code here
  
  const totalValue = items => items.reduce((acc, obj)=>acc + obj.price, 0)
  
  
  
  console.log(totalValue(items)); 
  // Output: 60





  //4 Write an ES6 function that takes an array of strings as input and concatenates them into a single string.

// Your code here

const concatStrings = arr => arr.reduce((acc, str)=>acc + str, "")



console.log(concatStrings(['this', 'is', 'fun'])); // Output: 'thisisfun'




//5 Write an ES6 function to multiply and return all the elements of a given array.


const numbers = [1, 2, 3, 4, 5];
// Your code here

const product = numbers => numbers.reduce((acc, num)=>num*acc, 1)



console.log(product(numbers));
// Output: 120






//6 Write an ES6 function that takes an array of strings and returns the longest string.

const strings = ["neogcamp", "Haule Haule", "code", "Batman", "Awesome"];
// Your code here

const longestString = strings => strings.reduce((acc, str)=> str.length > acc.length ? str : acc
, strings[0])



console.log(longestString(strings)); 
// Output: 'Haule Haule





//7 Write an ES6 function that takes an array of objects with name and age property, and returns the name of the oldest person.


const people = [
    {name: 'Jeena', age: 25}, 
    {name: 'Priya', age: 30}, 
    {name: 'Naina', age: 45}
]
// Your code here

const oldestPersonName = people =>people.reduce((acc, obj)=>obj.age > acc.age ? obj: acc, people[0]).name



console.log(oldestPersonName(people)); 
// Output: 'Naina'





//8 Write an ES6 function that takes an array of objects representing people with properties name and age, and returns an object with the average age of all the people.

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 40 }
  ];
  // Your code here
  
  const getAverageAge = people => people.reduce((acc, obj)=>acc + obj.age, 0)/people.length
  
  
  
  console.log(getAverageAge(people));
  // Output: { averageAge: 32.5 }




  //9 Write an ES6 function that takes an array of objects representing products with properties name, price, and quantity, and returns an object with the most expensive product.

const products = [
    { name: "Bread", price: 10, quantity: 2 },
    { name: "Clips", price: 20, quantity: 5 },
    { name: "Knife", price: 30, quantity: 1 },
    { name: "Slipper", price: 40, quantity: 3 }
  ];
  // Your code here
  
  const findMostExpensiveProduct = products => products.reduce((acc, product)=>product.price > acc.price ? product : acc, products[0])
  
  
  
  
  console.log(findMostExpensiveProduct(products)); 
  // { name: "Slipper", price: 40, quantity: 3 }




 //10 Write an ES6 function that takes an array of strings and returns an object with the count of each string.

const fruits = ['apple', 'banana', 'banana', 'cherry', 'apple', 'apple', 'banana'];
// Your code here

const countStrings = fruits => fruits.reduce((acc, fruit)=>{ 
    if(acc[fruit]){
        acc[fruit]+=1
        return acc
    }
    else{
        return {...acc, [fruit]:1}
    }
}, {})



console.log(countStrings(fruits));
// Output: { 'apple': 3, 'banana': 3, 'cherry': 1 } 