let students = ["Ali", "Mohammad", "Akbar"];
    students.push("Mohammad Hussain");
    document.getElementById("output").innerHTML = students.join(", ");

    // Question 02
   let fruits = ["apple", "mango", "banana", "strawberry", "cherry", "melon"];
   fruits.pop();
   console.log(fruits);
// Question 03
let daysname = ["Tuesday", "Wednesday", "Thursday", "Friday"];
daysname.unshift("Monday");
console.log(daysname);
// Question 04
let colors = ["Red", "Green", "Blue", "Yellow"];
colors.shift();
console.log(colors);
// Question 05
let fruitList = ["apple", "mango", "banana", "strawberry", "cherry", "melon"];
   fruitList.shift();
   console.log(fruitList);
// Question 06
let subjects = ["History", "English", "Urdu", "Islamiyat"];
subjects.splice(2, 0, "Math", "Science");
console.log(subjects);

// Question 07  
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
cities.splice(1, 2);
console.log(cities);
// Question 08
let fruitsarry = "apple,mango,banana,strawberry,cherry";
let fruitarray = fruitsarry.split(",");
console.log(fruitarray);
// Question 09
let characters = ['A', 'B', 'C', 'D', 'E'];
let joined = characters.join("");
console.log(joined);
// Question 10
let arr1 = ['Pen', 'Pencil'];
let arr2 = ['eraser', 'Sharpener'];
let combined = arr1.concat(arr2);
console.log(combined);
// Question 11
let numbers =[3, 5, 7, 2, 8, 1];
numbers.sort();
console.log(numbers);
// Question 12
let names =["Zabi", "Abdullah", "Sultan", "Sharif"]
names.sort();
console.log(names);
// Question 13
let numreverse =[8, 7, 6, 5, 4, 3, 2, 1];
numreverse.reverse();
console.log(numreverse);    
// Question 14
let colrs = ["Red", "Green", "Blue", "Yellow"];
let index = colrs.indexOf("Blue");
console.log(index);
// Question 15
let items=[];
items.push("HTML", "CSS", "JavaScript");
console.log(items);

// Question 16
let numbering = [1, 2, 3, 4, 5];
numbering.splice(2,4);
console.log(numbering);
// Question 17
let text ="HTML SCC JavaScript";
let textarray = text.split(" ");
console.log(textarray);
// Question 18
let letters = ['a', 'b', 'c'];
letters.reverse();
let joinletters = letters.join(" ");
console.log(joinletters);
// Question 19
let pakcities = ["Lahore", "Islamabad", "Quetta", "Peshawar"];
let indexs = pakcities.indexOf("Karachi");
if (indexs !== -1) {
    pakcities.splice(indexs, 1);
    console.log('"Karachi" Found at index.');
}else {
    console.log('"Karachi" Not Found');
}
// Question 20
let evennumbers = [2, 4, 6, 8, 10];
let oddnumbers = [1, 3, 5, 7, 9];
let allnumbers = evennumbers.concat(oddnumbers);
allnumbers.sort((a, b) => a - b);
console.log(allnumbers);