const palindromes = function(words) {
 var replacedWords = words.replace(/[\W_]+/g, "");
 var splitWords = replacedWords.split("");
   if (splitWords.reverse().join("").toLowerCase() == replacedWords.split().reverse().join("").toLowerCase()){
   return true;
   } else {
   return false;
   }
}

module.exports = palindromes
