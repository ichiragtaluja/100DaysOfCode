const output = document.querySelector(".output");

const fakeFetch = (url, dimensions) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/getImage") {
        resolve({
          status: 200,
          data: {
            image: {
              link: `https://picsum.photos/${dimensions[0]}/${dimensions[1]}`,
              title: "Random Image",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No photo of such dimension found",
        });
      }
    }, 2000);
  });
};

const newUrl = "https://example.com/getImage";
const dimensionArray = [200, 200];
// your code here

// Output on the DOM should be an image.
const getImage = async (newUrl, dimensionArray) => {
  try {
    const result = await fakeFetch(newUrl, dimensionArray);

    if (result.status === 200) {
      output.innerHTML = `<img src="${result.data.image.link}"/>`;
    }
  } catch (error) {
    output.innerHTML = error.message;
  }
};

getImage(newUrl, dimensionArray);
