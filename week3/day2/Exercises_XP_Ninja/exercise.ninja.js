// // Exercise 1 : 

// let object1 = {
//     FullName: 'Name 1',
//     Mass : 50,
//     Height : 160,
//     BMI : function() {
//         return this.Mass / (this.Height * this.Height);
//     }
// }

// let object2 = {
//     FullName: 'Name 2',
//     Mass : 70,
//     Height : 180,
//     BMI : function() {
//         return this.Mass / (this.Height * this.Height);
//     }
// }

// function compareBMI(object1, object2) {
//     return object1.BMI() > object2.BMI() ? `${object1.FullName} has a higher BMI than \
//     ${object2.FullName}` : `${object2.FullName} has a higher BMI than ${object1.FullName}`;
// }

// // Display the name of the person who has the largest BMI
// console.log(compareBMI(object1, object2));

// // Exercise 2 : 

// gradesList = [60, 50, 24, 80, 90, 100, 70, 85, 95, 75];

// findAVG = (gradesList) => {
//     let avg = 0;
//     let sum = 0;
//     for (let i = 0; i < gradesList.length; i++) {
//         sum += gradesList[i];
//     }
//     avg = sum / gradesList.length;

//     console.log(`The average of the grades is ${avg}`);

//     if (avg > 65) {
//         console.log("The student passed the exam");
//     } else {
//         console.log("The student failed the exam");
//     }
// }

// findAVG(gradesList);

// // Bonus

// findAVG = (gradesList) => {
//     let avg = 0;
//     let sum = 0;
//     for (let i = 0; i < gradesList.length; i++) {
//         sum += gradesList[i];
//     }
//     avg = sum / gradesList.length;
//     return avg;
// }

// passOrFail = (avg) => {
//     if (avg > 65) {
//         console.log("The student passed the exam");
//     } else {
//         console.log("The student failed the exam");
//     }
// }

// console.log(`The average of the grades is ${findAVG(gradesList)}`);
// passOrFail(findAVG(gradesList));