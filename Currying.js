let multiply = (x, y) => {
  console.log(x * y);
};

let multiplyBytwo = multiply.bind(this, 5);
multiplyBytwo(5);
