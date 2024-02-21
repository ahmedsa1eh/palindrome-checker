const checkBtn = document.querySelector("button");
const userInput = document.querySelector("#user-input");
const result = document.querySelector(".result");

const checkUserInput = function () {
  if (userInput.value == " " || !Number.isNaN(Number(userInput.value))) {
    userInput.value = "";
    result.textContent = "Enter valid Value (Text Only!)";
    result.classList.remove("palindrome");
    result.classList.remove("notPalindrome");

    result.classList.add("invalid-text");
  } else {
    palindromeChecker();
  }
};

const palindromeChecker = function () {
  result.classList.remove("invalid-text");

  let string = userInput.value;
  if (
    string.toLowerCase().split("").reverse().join("") == string.toLowerCase()
  ) {
    // userInput.value = "";
    result.textContent = "It Is Palindrome";
    result.classList.remove("notPalindrome");
    result.classList.add("palindrome");
  } else {
    // userInput.value = "";
    result.textContent = "It Is not Palindrome";
    result.classList.remove("palindrome");

    result.classList.add("notPalindrome");
  }
};

checkBtn.addEventListener("click", checkUserInput);
