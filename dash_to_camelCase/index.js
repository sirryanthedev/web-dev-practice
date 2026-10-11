function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function camelize(str) {
  words = str.split("-");
  transformedWords = [];
  for (let i = 0; i < words.length; i++) {
    if (i > 0) {
      transformedWords.push(capitalize(words[i]));
    } else {
      transformedWords.push(words[i]);
    }
  }
  return transformedWords.join("");
}
