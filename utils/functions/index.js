const arrayForFiveCase = (numberOfPages) => {
  // REFERÊNCIA: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
  return Array.from({length: numberOfPages}, (element, index) => (index + 1).toString());
};

// console.log(arrayForFiveCase(5));

module.exports = {
  arrayForFiveCase,
};
