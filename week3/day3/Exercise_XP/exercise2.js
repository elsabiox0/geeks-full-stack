// Inventory stock
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
};  

// Prices of items
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}; 

// Shopping list
const shoppingList = ["banana", "orange", "apple"];

// Function to calculate total bill
function myBill() {
    let total = 0;

    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item]; // Add item price to total
            stock[item] -= 1;      // BONUS: Decrease stock by 1
        }
    }

    return total;
}

// Call the function and display the total
const bill = myBill();
console.log("Total bill:", bill);
console.log("Updated stock:", stock); // Optional: to see the stock after purchase
