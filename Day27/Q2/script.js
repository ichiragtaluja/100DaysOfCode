// Use this URL - https://example.com/winner-team to make a fake fetch call to the get names of winner group members and show a nice message on the DOM congratulating all of them. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/winner-team") {
        resolve({
          status: 200,
          data: {
            message: "Success",
            data: ["Jhon", "Raju", "Anjali", "Sakshi"],
          },
        });
      } else {
        reject({
          status: 404,
          message: "No Users found.",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector(".output");

const ourUrl = "https://example.com/winner-team";

fakeFetch(ourUrl)
  .then((response) => {
    if (response.status === 200) {
      output.innerHTML = `Congratulation to the members of winning team ${response.data.data.map(
        (name) => ` ${name}`
      )} great work keep it up.`;
      //   console.log(response.data.data);
    }
  })
  .catch((error) => console.log(error.status, error.message));
// your code here

// Output on the DOM should be:
// Congratulation to the members of winning team Jhon, Raju, Anjali, Sakshi, great work keep it up.
