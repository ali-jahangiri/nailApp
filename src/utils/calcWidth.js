const calcWidth = (allLength, thisElement) => {
  return `${(100 / allLength) * thisElement.length}%`;
};
export default calcWidth;
