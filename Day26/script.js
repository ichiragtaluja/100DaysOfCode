const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/post/comments") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { email: "xyz@gmail.com", commentBody: "Well done keep it up" },
            {
              email: "hello@outlook.com",
              commentBody: "Good going a lot to learn from you awesome",
            },
            {
              email: "ram99@gmail.com",
              commentBody: "Anyone from Vadodara here",
            },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "No Commentes found.",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector(".output");

fakeFetch("https://example.com/post/comments")
  .then(({ data, status }) => {
    if (status === 200) {
      output.innerHTML = `<ol>
      ${data.map((object) => `<li>${object.email}</li>`).join("")}</ol>
      <p>Total length of all the comments
      :  ${data.reduce(
        (acc, object) => acc + object.commentBody.length,
        0
      )}</p>`;
    }
  })
  .catch((error) => console.error(error.status, error.message));

// your code here

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com
