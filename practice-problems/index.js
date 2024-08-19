// Array of 50 problems related to JavaScript functions
const functionProblems = [
    "1. Write a function that takes two numbers as arguments and returns their sum.",
    "2. How do you create a function that multiplies two numbers and returns the result?",
    "3. Write a function that takes an array and returns the largest number.",
    "4. How do you create a function that returns the factorial of a number?",
    "5. Write a function that checks if a string is a palindrome.",
    "6. How do you create a function that reverses a string?",
    "7. Write a function that takes two strings and checks if they are anagrams.",
    "8. How do you create a function that calculates the average of an array of numbers?",
    "9. Write a function that returns the first n Fibonacci numbers.",
    "10. How do you create a function that capitalizes the first letter of each word in a string?",
    "11. Write a function that takes a number and returns true if it's prime, false otherwise.",
    "12. How do you create a function that converts Celsius to Fahrenheit?",
    "13. Write a function that returns the square of a number.",
    "14. How do you create a function that concatenates two arrays?",
    "15. Write a function that takes an array and returns the sum of its elements.",
    "16. How do you create a function that returns the length of the longest word in a string?",
    "17. Write a function that returns the number of vowels in a string.",
    "18. How do you create a function that checks if a number is even or odd?",
    "19. Write a function that returns the GCD (Greatest Common Divisor) of two numbers.",
    "20. How do you create a function that returns the factorial of a number using recursion?",
    "21. Write a function that takes an array of numbers and returns the second largest number.",
    "22. How do you create a function that returns the reverse of an array?",
    "23. Write a function that takes a string and returns the number of words in it.",
    "24. How do you create a function that checks if a number is a perfect square?",
    "25. Write a function that takes an array of numbers and returns a new array with only even numbers.",
    "26. How do you create a function that checks if two arrays are equal?",
    "27. Write a function that takes an array of numbers and returns a sorted array in ascending order.",
    "28. How do you create a function that removes duplicates from an array?",
    "29. Write a function that takes a number and returns its binary representation as a string.",
    "30. How do you create a function that converts a string to title case?",
    "31. Write a function that takes an array of numbers and returns a new array with the squares of the numbers.",
    "32. How do you create a function that flattens a nested array?",
    "33. Write a function that takes two dates and returns the number of days between them.",
    "34. How do you create a function that returns the median of an array of numbers?",
    "35. Write a function that takes a string and returns the most frequent character.",
    "36. How do you create a function that takes an array and returns it without the first and last elements?",
    "37. Write a function that takes an array of objects and returns an array of values for a specific key.",
    "38. How do you create a function that checks if a string contains only alphanumeric characters?",
    "39. Write a function that takes a number and returns the sum of its digits.",
    "40. How do you create a function that returns the length of the longest substring without repeating characters?",
    "41. Write a function that takes an array of strings and returns the longest string.",
    "42. How do you create a function that shuffles the elements of an array?",
    "43. Write a function that takes a string and returns the number of uppercase letters.",
    "44. How do you create a function that counts the occurrences of a character in a string?",
    "45. Write a function that takes an array of numbers and returns an array with the cumulative sum.",
    "46. How do you create a function that removes all falsy values from an array?",
    "47. Write a function that takes an array of numbers and returns the product of all elements.",
    "48. How do you create a function that returns the intersection of two arrays?",
    "49. Write a function that takes an array and returns a new array with only unique elements.",
    "50. How do you create a function that takes a string and returns it in camelCase format?"
];


function printRandomProblem() {
    var problemEle = document.getElementById('problem')
    var randomIndex = Math.floor(Math.random() * functionProblems.length);
    problemEle.innerHTML = functionProblems[randomIndex];
}

printRandomProblem();
