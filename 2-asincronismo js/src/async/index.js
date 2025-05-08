const fnAsync = () => {
  console.log("3-affff");
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("5-Async!!"), 2000)
      : reject(new Error("Error"));
  });
};

const anotherFunction = async () => {
  console.log("2-Bye?");
  const something = await fnAsync();
  console.log(something);
  console.log("6-Hello!");
};

console.log("1-Before");
anotherFunction();
console.log("4-After");
