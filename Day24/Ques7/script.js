const output = document.querySelector(".output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/chat") {
        reject({
          status: 503,
          message: "Service Unavailable",
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

fakeFetch("https://example.com/api")
  .then((response) => {
    output.textContent = response.data.message;
  })
  .catch((error) => {
    if (error.status === 503) {
      output.textContent =
        "We are facing high demand at the moment. Please check back later in sometime.";
    }
  });

// Your Code here

// Output on the DOM should be:
// We are facing high demand at the moment. Please check back later in sometime.
