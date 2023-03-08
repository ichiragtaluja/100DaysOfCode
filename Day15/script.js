//1. Guess the output

function outer() {
    console.log('Outer function called');
    inner();
}

function inner() {
    console.log('Inner function called');
}

outer();

// Outer function called
// Inner function called



//2. Guess the output

function first() {
    console.log('First function called');
}

function second() {
    first();
    console.log('Second function called');
    third();
}

function third() {
    console.log('Third function called');
}

second();

// First function called
// Second function called
// Third function called




//3. Guess the output
function first() {
    console.log('First function called');
    second();
}

function second() {
    console.log('Second function called');
    third();
}

function third() {
    console.log('Third function called');
    throw new Error('Error thrown in third function');
}

first();

// First function called
// Second function called
// Third function called
// Error thrown in third function




//4. Guess the output

function a() {
    console.log('a');
    b();
    console.log('a done');
}

function b() {
    console.log('b');
    c();
    console.log('b done');
}

function c() {
    console.log('c');
}

a();

//a
//b
//c
//b done
//a done





//5. Guess the output
function outer() {
    console.log('outer');
    inner();
    console.log('outer done');
}

function inner() {
    console.log('inner');
    setTimeout(() => console.log('inner timeout'), 0);
    console.log('inner done');
}

outer();

//outer
//inner
//outer done
//inner timeout
//inner done



//6. Guess the output

function add(a, b) {
    console.log(`adding ${a} and ${b}`);
    return a + b;
}

function multiply(a, b) {
    console.log(`multiplying ${a} and ${b}`);
    return a * b;
}

function calculate(a, b, c) {
    console.log('calculating...');
    return add(multiply(a, b), c);
}

const result = calculate(2, 3, 4);
console.log(result);

// calculating...
// multiplying 2 and 3
// adding 6 and 4
// 10






//7. Guess the output

function outer() {
    console.log('outer');
    setTimeout(() => {
        console.log('outer timeout');
        inner();
        console.log('outer timeout done');
    }, 0);
}

function inner() {
    console.log('inner');
}

outer();

// outer
// outer timeout
// inner
// outer timeout done




// Given an array of objects representing books, where each object has a title property, an author property, and a price property, write a function that returns the total price of all the books written by a given author.

const books = [{
        title: 'The Great Gatsby',
        author: 'F. Scott Fitzgerald',
        price: 9.99
    },
    {
        title: 'To Kill a Mockingbird',
        author: 'Harper Lee',
        price: 7.99
    },
    {
        title: '1984',
        author: 'George Orwell',
        price: 10.99
    },
    {
        title: 'Animal Farm',
        author: 'George Orwell',
        price: 8.99
    },
];
// totalCost('George Orwell')
// Output: 19.98


function totalBooksPriceByAuthor(books, author) {
    return books.reduce((total, book) => {
        if (book.author === author) {
            return total + book.price;
        }
        return total;
    }, 0);
}



// Given an array of strings, write a function that returns an array of objects representing each unique string and its frequency in the original array.
const strings = ['apple', 'banana', 'apple', 'cherry', 'cherry', 'cherry'];
// Output: [{ string: 'apple', frequency: 2 }, { string: 'banana', frequency: 1 }, { string: 'cherry', frequency: 3 }]

const frequencyChecker = fruitsArray => fruitsArray.reduce((acc, fruit) => {
    for (let i = 0; i < acc.length; i++) {
        if (acc[i].string === fruit) {
            acc[i].frequency += 1
            return acc
        }
    }
    return [...acc, {
        string: fruit,
        frequency: 1
    }]
}, [])