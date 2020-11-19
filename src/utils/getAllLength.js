const getAllLength = (...all) => {
  let sum = 0;
  all.forEach((el) => (sum += el.length));
  return sum;
};

export default getAllLength;
