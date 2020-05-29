function minima(numberOfElements, numbers) {
  return numbers.sort((a, b) => a - b).slice(0, numberOfElements);
}

export { minima };
