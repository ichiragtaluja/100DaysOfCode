const output = document.querySelector(".output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/allbooks") {
        reject({
          status: 400,
          message: "Bad Request",
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
    const result = await fakeFetch("https://example.com/api/allbooks");
    output.innerHTML = result.data.message;
  } catch (error) {
    output.innerHTML = error.message;
  }
};

displayOutput();

// Your Code here

// Output on the DOM should be:
// Bad Request! Requested size too large.
