function infiniteCurring(a) {
  return (b) => {
    if (b) {
      return infiniteCurring(a + b);
    }
    return a;
  };
}

console.log(infiniteCurring(2)(8)());
