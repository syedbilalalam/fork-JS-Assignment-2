//JS ASSIGNMENT 2

/*.                                 Chapter 20 – for loops nested
Write a nested for loop to generate all combinations of two arrays: firstNames = ["Lil", "Big"] and lastNames = ["Zzz", "Boom"].
Explain how many times the inner loop runs if the outer loop runs 3 times and the inner loop runs 2 times.
Modify the nested loop to only generate names where both indexes are not the same.
*/

//CODE

// let firstNames = ["Lil", "Big"];
// let lastNames = ["Zzz", "Boom"];

// for (let i = 0; i < firstNames.length; i++) {
//   for (let j = 0; j < lastNames.length; j++) {
//     if (i !== j) {
//       console.log(firstNames[i] + " " + lastNames[j]);
//     }
//   }
// }

// Explanation: If outer loop runs 3 times and inner loop 2 times => inner will be 3 × 2 = 6 times.




/*.                       Chapter 21 – Changing case
Write a program to convert a user’s input into lowercase and display it.
Use toUpperCase() to normalize city names before comparison.
Explain the importance of changing case in user input validation.
*/

// CODE:

// let userInput = prompt("Enter something:");
// console.log(userInput.toLowerCase());
// let city = prompt("Enter your city:");
// if (city.toUpperCase() === "KARACHI") {
//   console.log("Welcome to Karachi!");
// }

// Explanation: Changing case ensures consistency in comparison regardless of how the user types it.




/*.                    Chapter 22 – Strings: measuring length and extracting parts
Write a script to extract the first 5 characters from the string "JavaScriptRocks".
Get the last character of any user-provided string.
Ask the user to input their full name and display the length of the input.
*/

// CODE:

// let str = "JavaScriptRocks";
// console.log(str.substring(0, 5)); // "JavaS"
// let userStr = prompt("Enter any string:");
// console.log("Last character:", userStr[userStr.length - 1]);
// let fullName = prompt("Enter your full name:");
// console.log("NAME:", fullName);
// console.log("Length:", fullName.length);



/*.                    Chapter 23 – Strings: finding segments
Use indexOf to find the position of “dog” in "The lazy dog sleeps.".
Write a script that checks if the word “hello” exists in user input.
How does indexOf behave if the string isn’t found?
*/

// CODE:

// let sentence = "The lazy dog sleeps.";
// console.log(sentence.indexOf("dog")); // 9
// let input = prompt("Say something:");
// if (input.toLowerCase().indexOf("hello") !== -1) {
//   console.log("You said hello!");
// }




/*.               Chapter 24 – Strings: finding a character at a location
Write a script to find the character at position 4 in the word “JavaScript”.
Ask a user for a string and a position; return the character at that position.
What happens when the index is out of bounds? Test it.
*/

// CODE:
// let word = "JavaScript";
// console.log(word.charAt(4)); // "S"
// let userInput = prompt("Enter a string:");
// let position = parseInt(prompt("Enter a position:"));
// console.log("Character:", userInput.charAt(position));




/*.               Chapter 25 – Strings: replacing characters
Replace the word “bad” with “good” in the string "This is a bad example.".
Replace all instances of "JS" with "JavaScript" in a given sentence.
Use replace() to customize a template message like "Hello, NAME".
*/

// CODE:

// let str1 = "This is a bad example.";
// console.log(str1.replace("bad", "good"));
// let str2 = "JS is fun. JS is powerful.";
// console.log(str2.replace(/JS/g, "JavaScript"));
// let template = "Hello, NAME";
// let name = prompt("Enter your name:");
// console.log(template.replace("NAME", name));



/*.               Chapter 26 – Rounding numbers
Demonstrate rounding 2.6 using Math.round, Math.floor, and Math.ceil.
Ask the user to input a number and round it to the nearest integer.
Compare Math.floor(-2.9) and Math.ceil(-2.9). Explain the difference.
*/

// CODE:

// console.log(Math.round(2.6)); // 3
// console.log(Math.floor(2.6)); // 2
// console.log(Math.ceil(2.6));  // 3
// let num = parseFloat(prompt("Enter a number:"));
// console.log("Rounded:", Math.round(num));
// console.log(Math.floor(-2.9)); // -3
// console.log(Math.ceil(-2.9));  // -2

// Explanation: Math.floor moves toward negative infinity, Math.ceil toward positive.




/*.               Chapter 27 – Generating random numbers
Generate a random number between 1 and 6 (like a dice roll).
Write a coin toss simulator using Math.random().
Simulate a random password generator that picks a number between 1000 and 9999.
*/

// CODE:

// let dice = Math.floor(Math.random() * 6) + 1;
// console.log("Dice roll:", dice);
// let toss = Math.random() < 0.5 ? "Heads" : "Tails";
// console.log("Coin toss:", toss);
// let password = Math.floor(Math.random() * 9000) + 1000;
// console.log("Password:", password);




/*.                 Chapter 28 – Converting strings to integers and decimals
Convert the string "45.67" to a float and log it.
Parse an integer from the string "123px". What’s the result?
What happens when you try to parse "abc" to an integer?
*/

// CODE:

// let floatNum = parseFloat("45.67");
// console.log(floatNum); // 45.67
// let intNum = parseInt("123px");
// console.log(intNum); // 123
// let invalid = parseInt("abc");
// console.log(invalid); // NaN




/*.                 Chapter 29 – Converting strings to numbers, numbers to strings
Convert a number to a string and show its type using typeof.
Convert the string "2025" to a number and add 10.
Explain the difference between parseInt and Number() using examples.
*/

// CODE:

// let num = 123;
// let str = String(num);
// console.log(typeof str);
// let year = "2025";
// let newYear = Number(year) + 10;
// console.log(newYear); =

// Explanation:
// parseInt("10.5") → 10 (stops at decimal)
// Number("10.5") → 10.5 (fully converts)



/*.                 Chapter 30 – Controlling the length of decimals
Use .toFixed(2) to display only 2 decimal places of 123.45678.
How would you convert "12.999" to a number and round it to 1 decimal?
Ask the user to input a decimal and display it rounded to 3 decimal places.
*/

// CODE:

// let num = 123.45678;
// console.log(num.toFixed(2)); // "123.46"
// let val = parseFloat("12.999").toFixed(1);
// console.log(val); // "13.0"
// let input = parseFloat(prompt("Enter a decimal:"));
// console.log("Rounded to 3 decimals:", input.toFixed(3));



/*.                   Chapter 31 – Getting the current date and time
Write a script to display the current date and time using new Date().
Extract and display only the year from the current date.
Display a greeting based on current time (AM/PM).
*/

// CODE:

// let now = new Date();
// console.log("Current Date & Time:", now);
// let year = new Date().getFullYear();
// console.log("Year:", year);
// let hour = new Date().getHours();
// console.log(hour < 12 ? "Good Morning" : "Good Afternoon");




/*                    Chapter 32 – Extracting parts of the date and time
Display the current day, month, and year separately.
Extract the hours and minutes from the current time.
Create a digital clock format like "13:45" using Date object methods.
*/

// CODE:

// let now = new Date();

// console.log("Day:", now.getDate());
// console.log("Month:", now.getMonth() + 1); 
// console.log("Year:", now.getFullYear());
// console.log("Hours:", now.getHours());
// console.log("Minutes:", now.getMinutes());
// console.log("Digital Clock:", now.getHours() + ":" + now.getMinutes());


/*    THE END    */