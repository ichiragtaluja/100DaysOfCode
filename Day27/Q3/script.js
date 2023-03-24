// Use this URL - https://example.com/login to make a fake fetch call and show the status like it is authenticated or not with a message in the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/login") {
        resolve({
          status: 200,
          data: {
            auth: true,
          },
        });
      } else {
        reject({
          status: 404,
          message: "Status not found",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector(".output");

const exUrl = "https://example.com/login";

const checkIfVerified = async () => {
  try {
    const result = await fakeFetch(exUrl);
    output.innerHTML = `verified`;
  } catch (error) {
    output.innerHTML = error.message;
  }
};

checkIfVerified();
// your code here

// Output on the DOM should be:
// Verified
