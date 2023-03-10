//1 compute the totalValue for each object in the array and add the totalValue field to the object(total = original (1-discount)*stock)


const sales = [{
        item: 'PS4 Pro',
        stock: 3,
        original: 399.99
    },
    {
        item: 'Xbox One X',
        stock: 1,
        original: 499.99,
        discount: 0.1
    },
    {
        item: 'Nintendo Switch',
        stock: 4,
        original: 299.99
    },
    {
        item: 'PS2 Console',
        stock: 1,
        original: 299.99,
        discount: 0.8
    },
    {
        item: 'Nintendo 64',
        stock: 2,
        original: 199.99,
        discount: 0.65
    }
];

const totalFunction = sales => sales.map((item) => {
    if (item.discount === undefined) {
        item.discount = 0
        return {
            ...item,
            total: item.original * (1 - item.discount) * item.stock
        }
    } else {
        return {
            ...item,
            total: item.original * (1 - item.discount) * item.stock
        }
    }

})

console.log(totalFunction(sales))




//2 create an array of objects where the key is the id of the video and the value are an array of comment text to that video



const videoJSON = {
    "videos": [{
            "id": 1,
            "title": "Introduction to JavaScript",
            "description": "Learn the basics of JavaScript programming",
            "length": "2:30",
            "category": "Programming",
            "views": 1000,
            "likes": 200,
            "dislikes": 10,
            "comments": [{
                    "user": "John",
                    "comment": "Great tutorial!"
                },
                {
                    "user": "Sarah",
                    "comment": "Thanks for the help!"
                }
            ]
        },
        {
            "id": 2,
            "title": "Introduction to HTML",
            "description": "Learn the basics of HTML programming",
            "length": "3:00",
            "category": "Web Development",
            "views": 1500,
            "likes": 300,
            "dislikes": 20,
            "comments": [{
                    "user": "David",
                    "comment": "Awesome tutorial!"
                },
                {
                    "user": "Emily",
                    "comment": "Really helpful, thanks!"
                }
            ]
        },
        {
            "id": 3,
            "title": "Introduction to CSS",
            "description": "Learn the basics of CSS programming",
            "length": "4:00",
            "category": "Web Development",
            "views": 2000,
            "likes": 400,
            "dislikes": 30,
            "comments": [{
                    "user": "Mike",
                    "comment": "Great job, keep it up!"
                },
                {
                    "user": "Jennifer",
                    "comment": "Excellent tutorial, thank you!"
                }
            ]
        }
    ]
}
// SAMPLE OUTPUT
[{
    "1": ["Great tutorial!", "Thanks for the help!"]
}, ...]

const funcc = ({
    videos
}) => videos.map(({
    id,
    comments
}) => {
    return {
        [id]: comments.map(userinfo => userinfo.comment)
    }
})

console.log(funcc(videoJSON))



//Solve below questions based on the data
// 1. create an array of objects which includes `symbol` and `prices` array of date after `“2022-03-02”` only
// 2. create an array of objects which include `name` and average stock price of the stock

const stockData = {
    "stocks": [{
            "symbol": "AAPL",
            "name": "Apple Inc.",
            "prices": [{
                    "date": "2022-03-01",
                    "price": 138.54
                },
                {
                    "date": "2022-03-02",
                    "price": 142.76
                },
                {
                    "date": "2022-03-03",
                    "price": 144.11
                },
                {
                    "date": "2022-03-04",
                    "price": 143.98
                },
                {
                    "date": "2022-03-05",
                    "price": 145.60
                }
            ]
        },
        {
            "symbol": "GOOGL",
            "name": "Alphabet Inc.",
            "prices": [{
                    "date": "2022-03-01",
                    "price": 2749.50
                },
                {
                    "date": "2022-03-02",
                    "price": 2778.79
                },
                {
                    "date": "2022-03-03",
                    "price": 2787.44
                },
                {
                    "date": "2022-03-04",
                    "price": 2792.76
                },
                {
                    "date": "2022-03-05",
                    "price": 2768.25
                }
            ]
        },
        {
            "symbol": "MSFT",
            "name": "Microsoft Corporation",
            "prices": [{
                    "date": "2022-03-01",
                    "price": 249.22
                },
                {
                    "date": "2022-03-02",
                    "price": 252.96
                },
                {
                    "date": "2022-03-03",
                    "price": 253.57
                },
                {
                    "date": "2022-03-04",
                    "price": 251.68
                },
                {
                    "date": "2022-03-05",
                    "price": 254.16
                }
            ]
        }
    ]
}


//1
stockData.stocks.map(stock => ({
    symbol: stock.symbol,
    prices: stock.prices.filter(price => price.date > "2022-03-02")
}))

//2
stockData.stocks.map((stock) => ({
    name: stock.name,
    avgrices: stock.prices.reduce((acc, curr) => curr.price + acc, 0) /
        stock.prices.length
}))