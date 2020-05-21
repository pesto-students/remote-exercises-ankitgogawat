function longestWordInString(sentence) {
  const trimmedSentence = sentence.trim();
  const wordsArray = trimmedSentence.split(' ');
  let wordLength = 0;
  let longestWord;

  for (let i = 0; i < wordsArray.length; i += 1) {
    if (wordsArray[i].length > wordLength) {
      wordLength = wordsArray[i].length;
      longestWord = wordsArray[i];
    }
  }
  return longestWord;
}

export { longestWordInString };
