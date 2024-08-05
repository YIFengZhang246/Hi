document.addEventListener('DOMContentLoaded', () => {
    // Prompt the user for their name
    const userName = prompt("Please enter your name:");

    // Concatenate the user's name into a welcome message
    const welcomeMessage = `Welcome, ${userName}!`;

    // Use a DOM method to output the welcome message into an HTML element
    const welcomeElement = document.getElementById('welcome-message');
    if (welcomeElement) {
        welcomeElement.textContent = welcomeMessage;
    }
});