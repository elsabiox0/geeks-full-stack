// #1
function funcOne() {
    let a = 5;               // 'a' is initialized to 5, scoped to funcOne
    if(a > 1) {
        a = 3;               // since 5 > 1, 'a' is reassigned to 3
    }
    alert(`inside the funcOne function ${a}`); // will alert: inside the funcOne function 3
}

// #1.1 - run in the console:
funcOne()

// #1.2 What will happen if the variable is declared 
// with const instead of let ?
// → If declared with const, `a = 3;` will throw a TypeError because 'a' would be a constant and can't be reassigned.


//#2
let a = 0; // Global variable 'a'

function funcTwo() {
    a = 5; // This modifies the global 'a'
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // alerts: inside the funcThree function 0 (initial value)
funcTwo()   // sets global 'a' to 5
funcThree() // alerts: inside the funcThree function 5

// #2.2 What will happen if the variable is declared 
// with const instead of let ?
// → You cannot reassign a const variable (`a = 5` in funcTwo will throw a TypeError).
// → Also, const variables must be initialized at the time of declaration.


//#3
function funcFour() {
    window.a = "hello"; // creates a global variable 'a' on the window object
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()  // sets window.a = "hello"
funcFive()  // alerts: inside the funcFive function hello

// → This works because `a` is now a global property via the `window` object.
