function longestWord(word) {
    var longWord = word.split(" ");
    let long = 0;
    let result = "";
    for (var i = 0; i < longWord.length; i++) {
      var longerWord = longWord[i];
      if (!longerWord) {
        return "Please type in sentence!"
      } else if (longerWord.length >= long) {
        long = longerWord.length;
        result = longerWord;
      }
    }
    return "Longest word:  " + result;
  }
  
  function shortestWord(word) {
    var shortWord = word.split(" ");
    let result = shortWord[0];
    for (var i = 0; i < shortWord.length; i++) {
      var shorterWord = shortWord[i];
      if (!shorterWord) {
        return "Please type in sentence!"
      } else if (shorterWord.length <= result.length) {
        result = shorterWord;
      }
    }
    return "Shortest Word:  " + result;
  }
  
  function wordLengths(word) {
    var lsWords = word.split(" ");
    var words = lsWords.map(w => w.length);
    let wordsSum = 0;
    for (var i = 0; i < words.length; i++) {
      wordsSum += words[i];
    }
    return "Number of Letters:  " + wordsSum;
  }