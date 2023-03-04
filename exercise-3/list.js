let list = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null,
    },
  },
};

const arrayToList = (arr) => {
  const list = {};
  for (element of arr) {
    list.value = element;
  }
};
