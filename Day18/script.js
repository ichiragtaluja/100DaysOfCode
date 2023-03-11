const JSONData = {
    "store": {
        "name": "The Bookstore",
        "address": {
            "street": "123 Main St",
            "city": "Anytown",
            "state": "CA",
            "zip": "12345"
        },
        "departments": [{
                "name": "Fiction",
                "manager": "John Smith",
                "categories": [{
                        "name": "Mystery",
                        "books": [{
                                "title": "The Girl with the Dragon Tattoo",
                                "author": "Stieg Larsson",
                                "isbn": "9780307473479",
                                "price": 14.99
                            },
                            {
                                "title": "Gone Girl",
                                "author": "Gillian Flynn",
                                "isbn": "9780307588364",
                                "price": 12.99
                            }
                        ]
                    },
                    {
                        "name": "Science Fiction",
                        "books": [{
                                "title": "Dune",
                                "author": "Frank Herbert",
                                "isbn": "9780441172719",
                                "price": 8.99
                            },
                            {
                                "title": "Ender's Game",
                                "author": "Orson Scott Card",
                                "isbn": "9780812550702",
                                "price": 7.99
                            }
                        ]
                    }
                ]
            },
            {
                "name": "Non-Fiction",
                "manager": "Alice Brown",
                "categories": [{
                        "name": "History",
                        "books": [{
                                "title": "A People's History of the United States",
                                "author": "Howard Zinn",
                                "isbn": "9780061965586",
                                "price": 16.99
                            },
                            {
                                "title": "The Immortal Life of Henrietta Lacks",
                                "author": "Rebecca Skloot",
                                "isbn": "9781400052189",
                                "price": 13.99
                            }
                        ]
                    },
                    {
                        "name": "Self-Help",
                        "books": [{
                                "title": "The 7 Habits of Highly Effective People",
                                "author": "Stephen R. Covey",
                                "isbn": "9780743269513",
                                "price": 10.99
                            },
                            {
                                "title": "How to Win Friends and Influence People",
                                "author": "Dale Carnegie",
                                "isbn": "9780671027032",
                                "price": 9.99
                            }
                        ]
                    }
                ]
            }
        ]
    }
}


//SAMPLE O/P:
// {
// 	"Mystery": [ "The Girl with the Dragon Tattoo", "Gone Girl"],
// 	"Science Fiction" : [ "Dune", "Ender's Game"],
// 	"History": [ "A People's History of the United States", "The Immortal Life of Henrietta Lacks"],
// 	...
// }

const getDepartmentWiseBooks = ({
    store: {
        departments
    }
}) => departments.map((department) => {
    return department.categories
}).reduce((acc, newarr) => {
    return [...acc, ...newarr]
}, []).reduce((accc, obj) => {
    return {
        ...accc,
        [obj.name]: obj.books.map((book) => {
            return book.title
        })
    }
}, {})


// [
//     [
//       { name: 'Mystery', books: [Array] },
//       { name: 'Science Fiction', books: [Array] }
//     ],
//     [
//       { name: 'History', books: [Array] },
//       { name: 'Self-Help', books: [Array] }
//     ]
//   ]

// const arrayOfGenres = getDepartmentWiseBooks(JSONData)
// console.log(arrayOfGenres)




const anonymousFunction = ({
    store: {
        departments
    }
}) => departments.reduce((acc, department) => {
    return {
        ...acc,
        [department.name]: department.categories.map(obj => {
            return obj.books
        }).reduce((acc, arr) => {
            return [...acc, ...arr]
        }, []).map(book => book.price).reduce((acc, price, i, arr) => {
            return acc + price / arr.length
        }, 0)
    }
}, {})
const ourArr = anonymousFunction(JSONData)
console.log(ourArr)