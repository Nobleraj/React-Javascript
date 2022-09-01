function infiniteCurring(a) {
  return (b) => {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

const currying = a => b => b ? currying(a+b) : a;

console.log(infiniteCurring(2)(8)());
