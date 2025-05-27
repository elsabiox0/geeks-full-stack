/**
 * @function displayUserWelcome
 * @description Creates and displays a user's profile picture and welcome message
 * within the 'userContainer' element.
 * @param {string} username - The name of the user to display.
 */
function displayUserWelcome(username) {
    const userContainer = document.getElementById('userContainer');

    // Make sure the container exists before trying to modify it
    if (userContainer) {
        // Clear any existing content in the container to avoid duplicates
        userContainer.innerHTML = ''; 
    } else {
        // Log an error if the container element isn't found
        console.error("Error: 'userContainer' element not found in the DOM. Please ensure your HTML has an element with id='userContainer'.");
        return; // Stop the function if the container isn't there
    }

    // 1. Create a new div element to hold user info (picture and text)
    const userInfo = document.createElement('div');
    userInfo.className = 'user-info'; // Apply custom CSS for styling

    // 2. Create and set up the profile picture (img element)
    const profilePic = document.createElement('img');
    profilePic.className = 'profile-pic'; // Apply custom CSS for styling
    profilePic.src = 'https://www.w3schools.com/howto/img_avatar.png'; // Default avatar image
    profilePic.alt = `${username}'s Profile Picture`; // Accessible alt text
    
    // Add an error handler for the image in case it fails to load
    profilePic.onerror = function() {
        this.onerror = null; // Prevents an infinite loop if the fallback also fails
        this.src = 'https://placehold.co/60x60/cccccc/333333?text=User'; // Fallback placeholder image
    };

    // 3. Create the welcome text (span element)
    const welcomeText = document.createElement('span');
    welcomeText.className = 'welcome-text'; // Apply custom CSS for styling
    welcomeText.textContent = `Welcome, ${username}!`; // Set the actual welcome message

    // 4. Append the profile picture and welcome text into the userInfo div
    userInfo.appendChild(profilePic);
    userInfo.appendChild(welcomeText);

    // 5. Append the complete userInfo div into the main userContainer on the page
    userContainer.appendChild(userInfo);
}

// --- Event Listeners: Code to run when the HTML is fully loaded ---
document.addEventListener('DOMContentLoaded', () => {
    // Get references to our buttons using their IDs
    const loadJohnBtn = document.getElementById('loadJohnBtn');
    const loadJaneBtn = document.getElementById('loadJaneBtn');

    // Add click event listeners to the buttons
    if (loadJohnBtn) { // Check if the button exists before adding listener
        loadJohnBtn.addEventListener('click', () => {
            displayUserWelcome("John"); // Call the function to display John's welcome
        });
    }

    if (loadJaneBtn) { // Check if the button exists before adding listener
        loadJaneBtn.addEventListener('click', () => {
            displayUserWelcome("Jane"); // Call the function to display Jane's welcome
        });
    }

    // Optional: Display a default user welcome when the page first loads
    displayUserWelcome("Guest"); 
});