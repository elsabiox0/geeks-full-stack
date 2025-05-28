const students = [{name: "Ray", course: "Computer Science", isPassed: true}, 
               {name: "Liam", course: "Computer Science", isPassed: false}, 
               {name: "Jenner", course: "Information Technology", isPassed: true}, 
               {name: "Marco", course: "Robotics", isPassed: true}, 
               {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
               {name: "Jamie", course: "Big Data", isPassed: false}];
// Using the filter() method, create a new array, containing the students that passed the course.
const passedStudents = students.filter(student => student.isPassed);
console.log(`Passed Students:`, passedStudents);

// Bonus : Chain the filter method with a forEach method, to congratulate the students with their name and course name 
passedStudents.forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`));