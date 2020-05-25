function chunkArrayInGroups(array, chunkSize) {
  const numberOfChunkArray = Math.ceil(array.length / chunkSize);
  const chunkArray = [];
  let index = 0;
  for (let i = 0; i < numberOfChunkArray; i += 1) {
    chunkArray[i] = [];
    for (let j = 0; j < chunkSize; j += 1) {
      if (array[index] !== undefined) {
        chunkArray[i][j] = array[index];
        index += 1;
      } else break;
    }
  }
  return chunkArray;
}

export {
  chunkArrayInGroups,
};
