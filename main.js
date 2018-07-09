let Phrase = require("aya-palindrome");

function palindromeTester(event) {
  event.preventDefault();

  let phrase = new Phrase(event.target.phrase.value);
  let palindromeResult = document.querySelector("#palindromeResult");

  if (phrase.palindrome()) {
    palindromeResult.innerHTML = `"\'${phrase.content}\'`.bold() + ` is a palindrome!\"`;
  } else {
    palindromeResult.innerHTML = `"\'${phrase.content}\'`.bold() + ` is a not a palindrome.\"`;
  }
}

document.addEventListener("DOMContentLoaded", function() {
  let button = document.querySelector("#palindromeTester");
  button.addEventListener("submit", function() {
    palindromeTester(event);
  });
});
