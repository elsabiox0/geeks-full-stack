const users = { user1: 18273, user2: 92833, user3: 90315 };

// Step 1: Convertir l'object en array
const usersArray = Object.entries(users);

// Step 2: Multiplier chaque ID par 2
const updatedUsersArray = usersArray.map(([key, value]) => [key, value * 2]);

console.log(updatedUsersArray);
