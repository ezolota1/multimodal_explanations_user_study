let currentIndex = 0;

// Define an array of predetermined links
const links = [
    "https://www.oslobodjenje.ba/",
    "https://www.avaz.ba/",
    "https://www.klix.ba/"
];

const linkElement = document.getElementById("link");

document.addEventListener("DOMContentLoaded", function() {

    function updateLinkAndRedirect() {
        linkElement.href = links[currentIndex];

        // Automatically redirect to the updated link
        window.location.href = linkElement.href;
        
        currentIndex = (currentIndex + 1) % links.length; // Cycle through the links
    }

    updateLinkAndRedirect();
});

