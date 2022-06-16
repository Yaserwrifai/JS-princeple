console.log("=================================Part1==============================");
console.log("=================================Part1==============================");
/* P1 Exercise 1
-In your JavaScript file create a variable called myName with your name as the value.
Put your name inside string quotes, e.g., "my name".
Then add a line of code to print the variable name to the console after the previous
 message.
-Save your JavaScript file in your editor.Reload the HTML page in your browser.
You should see your name printed.If not, investigate and fix it.--*/
console.log("Part1 Exercise 1  ");
var myName = "Yaser Rifai";
console.log("My Name is ", myName);


/*-P1 Exercise 2
Create a variable called age with a number that is your age.Do not use string quotes
for numbers.
Add a line to print that variable in the console.Save the file and reload the page.
You should see your name and your age.-*/
console.log("-------------------------------------------------------------------");
console.log("Part1 Exercise 2  ");
var age = 40;
console.log("My Name is ", myName, " and my Age is", age);


/*-P1 Exercise 3
Create a variable called juliaAge with a value 32. Create another variable called 
ageDiff and set it to an expression that calculates your age minus Julias 's age.
 Print the value of ageDiff. Save the file and reload the page. 
 You should see your age and the age difference. If you are younger than Julia, 
 you should see a negative number.

Writing code with conditionals
Conditionals are forms used programming to tell the computer to do different things,
 depending on some test, e.g., "if the user is logged in, say "
Hi " else say "
Please
log in .
"

The most basic conditional form is
if ...then...else...
-*/
console.log("-------------------------------------------------------------------");
console.log("Part1 Exercise 3  ");
var juliaAge = 32;
var ageDiff = age - juliaAge;
console.log("ageDiff ist", ageDiff);

const user = "logged in";
if (user == "logged in") {
    console.log("Hi  you are logged in");
} else {
    console.log("Please , log in");
}
console.log("-------------------------------------------------------------------");
/*-Exercise 4
Write a conditional that compares the variable with your age with the number 21.
 It should print either "You are older than 21"
or "You are not older than 21", appropriately, depending on your age.
Save your JavaScript file and reload the page.Make sure you see the correct message.
Try changing your age in the JavaScript file to make sure the other message prints 
when it should.-*/
console.log("Part1 Exercise 4  ");
const cAge = 21;
if (age > cAge) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}

/*-Exercise 5
Write a conditional that compares your age with Julia 's age. This conditional will need to test if you are older, younger, or the same age, and print, appropriately, either "Julia is older than you", ", or "You have the same age as Julia".

Save your changes and reload the file.*/
console.log("-------------------------------------------------------------------");
console.log("Part1 Exercise 5");
var myAge = 22,
    Julia_age = 30;
if (myAge == Julia_age) {
    console.log("You have the same age as Julia ")
} else if (myAge > Julia_age) { console.log("Julia is younger than you ") } else { console.log("Julia is older than you ") }

/*-JavaScript Array
Sorting an Array
Exercise 1
Create an array with all the names of your class (including mentors).
 Sort the array alphabetically. 
 Then print the first element of the array in the console.
  On the next line, print the last element of the array in the console. 
  On the next line, print all the elements of the array in the console
   (use a "for" loop). Save the file and reload the page. 
   You should see the first element of the sorted array, 
   the last element of the sorted array, 
   and a list of all the elements in order in the array in the console.-*/


console.log("=================================Part2==============================");
console.log("=================================Part2==============================");
console.log("-----------------------------------------------------------------------");
console.log("Part2 Exercise 1   ");

var classes = ["Ginger", "Suricatas", "Goldkkas", "Cheetahs ", "Badgers ", "Wombats "];
var classes_sort_alpha = classes.sort();

console.log("the first element of the array ist ", classes_sort_alpha[0]);
console.log("the last element of the array ist ", classes_sort_alpha[classes_sort_alpha.length - 1]);
console.log("all the elements of the sorted array ist ", classes_sort_alpha);


for (var i = 0; i < classes_sort_alpha.length; i++) {
    console.log('array' + '[' + i + ']=' + classes_sort_alpha[i]);
}
console.log("-----------------------------------------------------------------------");


/*Exercise 2
- Create an array wtith all the ages of the sudents in your class. 
Iterate the array using a while loop, and then print every age in the console.
 Add a conditional inside the while loop to only print even numbers.
  Write again a loop but use a "for" loop instead of a "while" loop. 
  Save your changes to your JavaScript file. 
  Reload the HTML page in your browser. 
  You should see every age printed, then only the even numbers printed. 
  If not, investigate and fix it.
*/
console.log("Part2 Exercise 2   ------Looping over an Array---------------------");
console.log(" -----------------------Using while");
var classes_ages = [22, 33, 55, 23, 34, 42];
var a = [],
    b = [];
var even_numers = [];
i = 0;
while (i < classes.length) {

    a[i] = classes[i];
    b[i] = classes_ages[i]
    console.log(a[i] + "'Ages is is is  :" + b[i]);

    if (i % 2 == 0) {

        even_numers += i + ",";
    }

    i++;
}
console.log("Even Number is is :" + even_numers);

console.log(" ----------------------------Using for");
var even_numers1 = [];
for (var i = 0; i < classes_ages.length; i++) {

    a[i] = classes[i];
    b[i] = classes_ages[i]
    console.log(a[i] + "'Ages is :" + b[i]);

    if (i % 2 == 0) {

        even_numers1 += i + ",";
    }
}
console.log("Even Number is :" + even_numers1);
console.log("----------------------------------------")
    /*-Exercise 3
Write a function that receives an array as a parameter and 
prints the lowest number in the array to the console.
 Save the changes to your JavaScript file.
  Reload the HTML page in your browser.
   You should see the lowest number in the array printed in the console. If not, 
   investigate and fix it.
-*/
console.log("Part2 Exercise 3   ------Looping over an Array---------------------");
console.log(" the first Mehtod")

function lowestNumber(arr) {
    var arr1 = arr.sort();
    console.log(arr1[0]);
};
lowestNumber([20, 23, -27, 7, 0, 1, -5]);

console.log(" the second Mehtod")

function minA(arr) {
    let minElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < minElement) {
            minElement = arr[i];
        }
    }

    console.log(minElement);
}
const myArray = [20, 23, -27, 7, 0, 1, -5];
minA(myArray);
/*-Exercise 4
Write a function that receives an array as a parameter and prints the biggest number
 in the array to the console.
 Save the changes to your JavaScript file. 
 Reload the HTML page in your browser. 
 You should see the biggest number in the array printed in the console.
  If not, investigate and fix it.
-*/
console.log("---------------------------------------------------------------");
console.log("-Part2 Exercise 4-");

function maxA(arr) {
    let maxElement = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxElement) {
            maxElement = arr[i];
        }
    }

    console.log(maxElement);
}
var ages = [20, 23, 27, 7, 0, 1, 5];
maxA(ages);
/*Exercise 5
Write a
function that receives two parameters, an array, and an index.The
function will print the value of the element at the given position(one - based)
 to the console.For example, given the following array and index,
  the function will print '6'.
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;
Save the changes to your JavaScript file and check your browser console.You should see the number at the correct index printed in the console.If not, investigate and fix it.
*/
console.log("---------------------------------------------------------------");
console.log("-Part2 Exercise 5-");
var array = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];
var index = 1;

function P_index(arr, indexN) {
    console.log(arr[indexN]);
}
P_index(array, index);
/*--*/
console.log("---------------------------------------------------------------");
console.log("-Part2 Exercise 6-");
/*-Exercise 6
Write a function that receives an array and only prints the values that repeat.

For example, given the following array and index, the function will print '6,23,33,100'.

var array = [3,6,67,6,23,11,100,8,93,0,17,24,7,1,33,45,28,33,23,12,99,100];

Save the changes to your JavaScript file. Reload the HTML page in your browser.
 You should see an array of the repeated numbers printed in the console. 
 If not, investigate and fix it.

Tip: this is considered by many students the most difficult exercise, 
therefore dedicate max. an hour to find a solution 
and if you can't leave it for tomorrow. 
Most of the time we need to take breaks and we will be able to see problems
 from different angles with a fresh mind.
-*/
function value_repeat(numbers) {
    var arr = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                if (numbers[i] === numbers[j]) {
                    arr.push(numbers[i])
                }
            }
        }
    }
    var newarr = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != arr[i - 1]) newarr.push(arr[i]);
    }
    console.log("Repeted Numbers is ", newarr);
}
const my_numbers = [1, 2, 2, 2, 3, 2, 4, 4, 5, 5, 6];
value_repeat(my_numbers);
/* 
Exercise 7
Write a simple JavaScript function to join all elements of the following array into a string.

myColor = ["Red", "Green", "White", "Black"];

Save the changes to your JavaScript file. Reload the HTML page in your browser. You should see the following in your console:

"Red", "Green", "White", "Black"

If not, investigate and fix it.
*/
console.log("---------------------------------------------------------------");
console.log("-Part2 Exercise 7-");

function joinAllElement(arr) {
    console.log(arr.toString());
}
let myColor = ["Red", "Green", "White", "Black"];
joinAllElement(myColor);
console.log("=================================Part3==============================");
console.log("=================================JavaScript String=============================");



/*-
Exercise 1
Write a JavaScript function that reverses a number.
 For example, if x = 32443 then the output should be 34423.
  Save your JavaScript file and reload the page. 
  Make sure you see the correct output. If not, investigate and fix it.
-*/
console.log("  part3 excercise1");
console.log(" Reverse number with loop")

function reversesN(num) {
    var rev = 0,
        lastdigit;
    while (num != 0) {
        lastdigit = num % 10;
        rev = rev * 10 + lastdigit;
        num = Math.floor(num / 10);

    }
    return rev;
}
var number = 1234567;
//var resn =
console.log("Reverse number  " + number + "   is: " + reversesN(number));


console.log(" Reverse number with Method JS")

function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
var my_num = 123456789
console.log("Reverse number  " + my_num + "   is: " + Number(reverse_a_number(my_num)));
console.log("---------------------------------------------------------------------");
/*- 
Exercise 2
Write a JavaScript function that returns a string in alphabetical order.
 For example, if x = 'webmaster' then the output should be 'abeemrstw'. 
 Punctuation and numbers aren't passed in the string. 
 Save your JavaScript file and reload the page. Make sure you see the correct output.
  If not, investigate and fix it.

-*/
console.log("  part3 excercise2");

function alphabet_order(str) {
    return str.split('').sort().join('');
}
var str = "zyhgfabcdre";
console.log("alphabet_order for " + str + "  is : " + alphabet_order(str));
/*Exercise 3
Write a JavaScript function that converts the first letter of every word to uppercase.
For example,
    if x = "prince of persia"
then the output should be "Prince Of Persia".
Save your JavaScript file and reload the page.
Make sure you see the correct output.If not, investigate and fix it.
*/
console.log("---------------------------------------------------------------------");
console.log("part3 excercise3");
const mySentence = "freeCodeCamp is an awesome resource";
console.log(mySentence);
const words = mySentence.split(" ");
//console.log(words);

for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
}
console.log(words.join(" "));
/*-Exercise 4
Write a JavaScript function that finds the longest word in a phrase.
 For example, if x = "Web Development Tutorial", 
 then the output should be "Development".
  Save your JavaScript file and reload the page. 
  Make sure you see the correct output. If not, investigate and fix it.-*/
console.log("---------------------------------------------------------------------");
console.log("part3 excercise 4");
console.log(" first way");

function findLongestWord(str) {
    var strSplit = str.split(' ');
    console.log(strSplit);
    var longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            var longword = strSplit[i];
        }
    }

    return longword;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));


console.log(" second way");

function findLongestWord1(str) {
    var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
    return longestWord[0];
}
console.log(findLongestWord1("The quick brown fox jumped over the lazy dog"));