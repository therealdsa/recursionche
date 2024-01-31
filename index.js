// Function to check if a word is a palindrome
function isPalindrome(word) {
    // Convert the word to lowercase for case-insensitive comparison
    const lowercaseWord = word.toLowerCase();
  
    // Initialize pointers for comparison
    let start = 0;
    let end = lowercaseWord.length - 1;

    // Loop until the pointers meet or cross each other
    while (start < end) {
        // Compare characters at the start and end positions
        if (lowercaseWord[start] !== lowercaseWord[end]) {
            return false; // Characters are not equal, not a palindrome
        }

        // Move pointers towards each other
        start++;
        end--;
    }

    // If the loop completes, the word is a palindrome
    return true;
}

// Example usage
const word1 = "gag";
const word2 = "hello";
console.log(`${word1} is a palindrome: ${isPalindrome(word1)}`);
console.log(`${word2} is a palindrome: ${isPalindrome(word2)}`);


