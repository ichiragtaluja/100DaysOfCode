// Use this URL - https://example.com/api/productlist to make a fake fetch call and print the total price of all the products. A fakeFetch has been provided. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/productlist") {
        resolve({
          status: 200,
          message: "Success",
          data: [
            { itemName: "Shoes", price: 100, quantity: 2 },
            { itemName: "Hat", price: 350, quantity: 1 },
            { itemName: "Tshirt", price: 410, quantity: 5 },
          ],
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found.",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector(".output");
const urlNew = "https://example.com/api/productlist";

const findTotalPrice = async (urlNew) => {
  try {
    const result = await fakeFetch(urlNew);
    if (result.status === 200) {
      const total = result.data.reduce(
        (acc, el) => acc + el.price * el.quantity,
        0
      );
      output.innerHTML = `Total: INR ${total}`;
    }
  } catch (error) {
    console.log(error);
  }
};

findTotalPrice(urlNew);
// Your Code here

// Output on the DOM should be:
// Total: INR 2600
