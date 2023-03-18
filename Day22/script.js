//1 Write a function ‘delayedGreeting’ that consoles a greeting message after a delay of 2 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here
const delayedGreeting = () =>
    setTimeout(() => console.log("Hello, welcome to my portfolio!"), 2000)

delayedGreeting();
// Hello, welcome to my portfolio!


//2 Write a function ‘delayedAddition’ that takes in two numbers and consoles their sum after a delay of 4 seconds using setTimeout. You can practice this question in any JS editor or your browser console.

// Your code here

const delayedAddition = (a, b) => setTimeout(() => {
    console.log(a + b)
}, 4000)

delayedAddition(2, 3);
// 5



//3 Write a function ‘delayAlert’ that takes in a message ‘Hello, world!’ and a delay time in milliseconds, and displays the message in an alert box after the specified delay time using setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here

const delayedAlert = (str, time) => {
    setTimeout(() => {
        alert(str)
    }, time)
}

delayedAlert('Hello, world!', 2000);
// Should display an alert box with the message, Hello, world!


//4 Write a function delayedLoop that takes a number 3 and consoles a message 'Hello' three times after a delay of 1 second each, using a for-loop and setTimeout. You can practice this question in any JS editor or your browser console.

// Your Code here
const delayedLoop = (a) => {
    for (let i = 0; i < a; i++) {
        setTimeout(() => console.log("hello"), (i + 1) * 1000)
    }
}

delayedLoop(3);
// should print Hello three times after 1 second each
// Output:
// Hello -- after 1 second
// Hello -- after another 1 second
// Hello -- after another 1 second



//5 Make a fake fetch call that takes a message and a boolean value to get data and console the message received from the server. A fake fetch has been provided. You can practice this question in any JS editor or your browser console.

const fakeFetch = (msg, shouldSucceed) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (shouldSucceed) {
                resolve(`message from server: ${msg}`);
            }
            reject(`error from server: ${msg}`);
        }, 3000);
    });
};

// Your Code here
fakeFetch("hi", true)
    .then(data => {
        console.log(data)
    })

// Hi -- after 3 seconds


Use this URL - https: //example.com/api/chat to make a fake fetch call and handle errors if any. Show a proper message to the user on the DOM, as per the status and message received from the server. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.


    const fakeFetch = (url) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (url === "https://example.com/api/chat") {
                    reject({
                        status: 503,
                        message: "Service Unavailable"
                    });
                } else {
                    resolve({
                        status: 200,
                        data: {
                            message: "Success"
                        }
                    });
                }
            }, 2000);
        });
    };

// Your Code here

fakeFetch('https://example.com/api/chat')
    .then(response => {
        // Handle success
        messageEl.innerHTML = `Status: ${response.status} - Message: ${response.data.message}`;
    })
    .catch(error => {
        // Handle error
        messageEl.innerHTML = `Status: ${error.status} - Message: ${error.message}`;
    });


// Output on the DOM should be: 
// We are facing high demand at the moment. Please check back later in sometime.



// Use this URL - https://example.com/api/itemlist to make a fake fetch call and list out all the items as an ordered list on the DOM. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.




