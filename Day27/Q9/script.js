const output = document.querySelector(".output");

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!url === "https://example.com/welcome") {
        reject({
          status: 511,
          message: "Network auth required",
        });
      } else {
        resolve({
          status: 200,
          data: {
            logged: true,
          },
        });
      }
    }, 2000);
  });
};

const urlNew = "https://example.com/welcome";

const showWelcomeMessage = async (welcomeText) => {
  try {
    const result = await fakeFetch(urlNew);
    if (result.status === 200) {
      output.innerHTML = welcomeText ?? "Welcome to the server";
    }
  } catch (error) {
    output.innerHTML = error.message;
  }
};

showWelcomeMessage("hi");
// your code here

// Output: As per the response from server
