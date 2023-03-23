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

const newUrl = "https://example.com/post/comments";
// fakeFetch(newUrl)
//   .then(({status, data}) => {
//     if (status === 200) {
//         output.innerHTML = `<ol>${data.map(el => `<li>${el.email}</li>`).join("")}</ol>`
//     }
//   })
//   .catch((error) => console.log(error));

const displayEmail = async () => {
  try {
    const result = await fakeFetch(newUrl);

    if (result.status === 200) {
      output.innerHTML = `<ol>${result.data
        .map((el) => `<li>${el.email}</li>`)
        .join("")}</ol>`;
    }
  } catch (error) {
    output.innerHTML = error.message;
  }
};

displayEmail();

// your code here

// Output on the DOM should be:
// 1. xyz@gmail.com
// 2. hello@outlook.com
// 3. ram99@gmail.com
