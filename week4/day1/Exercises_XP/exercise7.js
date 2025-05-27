// This is a self-invoking function (IIFE - Immediately Invoked Function Expression)
// It takes one argument: the name of the user.
(function(userName) {
    // 1. Get a reference to the navbar element using its ID
    const navbar = document.getElementById('mainNavbar');

    // Make sure the navbar exists before trying to add elements to it
    if (navbar) {
        // 2. Create a new <div> element to hold the user's information
        const userInfoDiv = document.createElement('div');
        // Add a class for styling
        userInfoDiv.classList.add('user-info');

        // 3. Create a <span> element for the user's name
        const userNameSpan = document.createElement('span');
        // Set the text content, welcoming the user
        userNameSpan.textContent = `Welcome, ${userName}!`;

        // 4. Create an <img> element for the profile picture
        const profilePicture = document.createElement('img');
        // Set the source of the image.
        // **IMPORTANT**: Replace 'https://via.placeholder.com/40' with a real path to your user's profile image.
        // For example: 'images/john-profile.jpg' if you have an 'images' folder.
        profilePicture.src = 'https://via.placeholder.com/40/007bff/ffffff?text=JP'; // Using a dynamic placeholder for demonstration
        // Set alt text for accessibility
        profilePicture.alt = `${userName}'s profile picture`;

        // 5. Append the span and image elements to the new div
        userInfoDiv.appendChild(userNameSpan);
        userInfoDiv.appendChild(profilePicture);

        // 6. Append the complete user info div to the navbar
        navbar.appendChild(userInfoDiv);
    } else {
        // Log an error if the navbar wasn't found (useful for debugging)
        console.error("Navbar with ID 'mainNavbar' not found!");
    }

// This is where you pass the user's name to the function.
// You can change 'John' to any name you want!
})('John');