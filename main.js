let userCount = 0;

// Define an array of predetermined links
const links = [
    "https://www.oslobodjenje.ba/",
    "https://www.avaz.ba/",
    "https://www.klix.ba/"
];

const linkElement = document.getElementById("link");

document.addEventListener("DOMContentLoaded", function() {

    // Function to update the link and redirect
    function updateLinkAndRedirect() {
        const linkIndex = userCount % links.length;
        linkElement.href = links[linkIndex];
        userCount++;

        // Simulate a click on the link to redirect the user
        // linkElement.click();

        // Automatically redirect to the updated link
        window.location.href = linkElement.href;
    }

    // Initial setup
    updateLinkAndRedirect();
});

