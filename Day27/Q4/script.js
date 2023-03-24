// Use this URL - https://example.com/order/status/OR00A12 to make a fake fetch call and show the order status using the user name on the DOM. Use HTML, CSS & JS template in REPL or Vanilla template in CodeSandbox for this question.

const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/order/status/OR00A12") {
        resolve({
          status: 200,
          data: {
            order: {
              orderId: "OR00A12",
              status: "delivery pending",
              userName: "Kajal Kumari",
            },
          },
        });
      } else {
        reject({
          status: 404,
          message: "No order found",
        });
      }
    }, 2000);
  });
};

const output = document.querySelector(".output");

const showOutput = async () => {
  try {
    const result = await fakeFetch("https://example.com/order/status/OR00A12");
    if (result.status === 200) {
      output.innerHTML = `Hello ${result.data.order.userName}
       your order status is ${result.data.order.status}.`;
    }
  } catch (error) {
    console.log(error.status, error.message);
  }
};

showOutput();
// your code here

// Output on the DOM should be:
// Hello Kajal Kumari your order status is delivery pending.
