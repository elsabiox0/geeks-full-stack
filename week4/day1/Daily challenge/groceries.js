let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

// Create an arrow function named displayGroceries
const displayGroceries = () => {
    console.log("Fruits:");
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
};

// Create another arrow function named cloneGroceries
const cloneGroceries = () => {
    // In the function, create a variable named user that is a copy of the client variable.
    let user = client;
    // Change the client variable to “Betty”.
    client = "Betty";
    // Will we also see this modification in the user variable ? Why ?
    console.log(`Original client: ${client}`);
    console.log(`User variable: ${user}`);
    console.log("We will NOT see the modification in the 'user' variable because 'client' is a primitive type (string), and when 'user' was assigned 'client', it received a copy of the value, not a reference to the 'client' variable itself. This is an example of 'Pass By Value'.");

    // In the function, create a variable named shopping that is equal to the groceries variable.
    let shopping = groceries;

    // Change the value of the totalPrice key to 35$.
    shopping.totalPrice = "35$";
    // Will we also see this modification in the shopping object ? Why ?
    console.log(`Groceries totalPrice: ${groceries.totalPrice}`);
    console.log(`Shopping totalPrice: ${shopping.totalPrice}`);
    console.log("We WILL see the modification in the 'groceries' object because 'groceries' is an object (non-primitive type), and when 'shopping' was assigned 'groceries', it received a reference to the same object in memory. Therefore, changes made through 'shopping' affect the original 'groceries' object. This is an example of 'Pass By Reference'.");

    // Change the value of the paid key to false.
    shopping.other.paid = false;
    // Will we also see this modification in the shopping object ? Why ?
    console.log(`Groceries paid status: ${groceries.other.paid}`);
    console.log(`Shopping paid status: ${shopping.other.paid}`);
    console.log("We WILL also see this modification in the 'groceries' object for the same reason as 'totalPrice'. 'shopping' and 'groceries' both reference the same object, so modifying nested properties through either variable will affect the shared object.");
};

// Invoke the displayGroceries function.
displayGroceries();

// Invoke the cloneGroceries function.
cloneGroceries();