// --- Part I ---
console.log("--- Part I ---");

function makeJuicePartI(size) {
    // Inner function for Part I
    function addIngredients(firstIngredient, secondIngredient, thirdIngredient) {
        const outputDiv = document.getElementById('partIOutput');
        if (outputDiv) {
            const p = document.createElement('p');
            p.textContent = `The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, and ${thirdIngredient}.`;
            outputDiv.appendChild(p);
        } else {
            console.error("Output div for Part I not found!");
        }
        console.log(`Part I: The client wants a ${size} juice, containing ${firstIngredient}, ${secondIngredient}, and ${thirdIngredient}.`);
    }

    // Invoke the inner function ONCE inside the outer function
    addIngredients("apple", "carrot", "ginger");
}

// Invoke the outer function in the global scope for Part I
makeJuicePartI("small");


// --- Part II ---
console.log("\n--- Part II ---");

function makeJuicePartII(size) {
    // Create an empty array named ingredients
    const ingredients = [];

    // Inner function: addIngredients
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        // Push the received ingredients into the 'ingredients' array
        ingredients.push(ingredient1, ingredient2, ingredient3);
        console.log(`Part II: Added ingredients: ${ingredient1}, ${ingredient2}, ${ingredient3}. Current ingredients: ${ingredients.join(', ')}`);
    }

    // New inner function: displayJuice
    function displayJuice() {
        const outputDiv = document.getElementById('partIIOutput');
        if (outputDiv) {
            const p = document.createElement('p');
            // Display the sentence using all collected ingredients
            p.textContent = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
            outputDiv.appendChild(p);
        } else {
            console.error("Output div for Part II not found!");
        }
        console.log(`Part II: Final juice: The client wants a ${size} juice, containing ${ingredients.join(', ')}.`);
    }

    // The client wants 6 ingredients, so invoke addIngredients TWICE
    addIngredients("orange", "banana", "spinach"); // First set of 3 ingredients
    addIngredients("pineapple", "blueberry", "mint"); // Second set of 3 ingredients

    // Then invoke displayJuice ONCE
    displayJuice();
}

// Finally, invoke the makeJuice function in the global scope for Part II
makeJuicePartII("large");