let a = 10;
console.log(100);

function getSome(a, b) {
  return {
    a,
    b,
  };
}

a = getSome("abc", "bcd");

console.log(a);
