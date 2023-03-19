//Guess the output

const second = async () => {
  setTimeout(() => {
    console.log("f");
  }, 0);
  console.log("g");
  return "h";
};

const first = () =>
  new Promise((resolve, reject) => {
    second();
    console.log("a");
    setTimeout(() => {
      console.log("c");
    }, 0);
    resolve("b");
  });
console.log("d");
console.log(first());
console.log("e");

//Guess the output

const second = async () => {
  setTimeout(() => {
    console.log("f");
  }, 0);
  console.log("g");
  return "h";
};

const first = () =>
  new Promise(async (resolve, reject) => {
    const value = await second();
    console.log("a", value);
    setTimeout(() => {
      console.log("c");
    }, 0);
    resolve("b");
  });
console.log("d");
console.log(first().then((data) => console.log(data)));
console.log("e");

//Guess the output

const second = async () => {
  setTimeout(() => {
    console.log("f");
  }, 0);
  console.log("g");
  return "h";
};

const first = () =>
  new Promise(async (resolve, reject) => {
    const value = second();
    console.log("a", value);
    setTimeout(() => {
      console.log("c");
      resolve("b");
    }, 0);
    setTimeout(() => {
      console.log("i");
      reject("j");
    }, 0);
    const latestValue = await value;
    console.log(latestValue);
  });
console.log("d");
console.log(first().then((data) => console.log(data)));
console.log("e");
