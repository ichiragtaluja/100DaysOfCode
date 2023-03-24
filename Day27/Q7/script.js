const output = document.querySelector(".output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/users") {
        reject({
          status: 500,
          message: "Internal Server Error",
        });
      } else {
        resolve({
          status: 200,
          data: {
            message: "Success",
          },
        });
      }
    }, 2000);
  });
};

const displayOutput = async () => {
  try {
    const result = await fakeFetch("https://example.com/api/users");
    output.innerHTML = result.data.message;
  } catch (error) {
    output.innerHTML = error.message;
  }
};

displayOutput();

// Your Code here

// Output on the DOM should be (in red color):
// Oops. Unexpected Error. Please try again.
