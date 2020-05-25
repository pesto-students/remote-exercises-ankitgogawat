
function removeFalsyValues(array) {
  const trueValues = [];
  for (const value of array) {
    if (value) {
      trueValues.push(value);
    }
  }
  return trueValues;
}

export {
  removeFalsyValues,
};
