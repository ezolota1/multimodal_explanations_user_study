let currentIndex = Math.floor(Math.random() * 3);

// Define an array of predetermined links
const links = [
    "https://xai-uni-ulm.limesurvey.net/812299?newtest=Y&lang=en",
    "https://xai-uni-ulm.limesurvey.net/771328?newtest=Y&lang=en",
    "https://xai-uni-ulm.limesurvey.net/832557?newtest=Y&lang=en"
];

const linkElement = document.getElementById("link");

document.addEventListener("DOMContentLoaded", function() {

    function updateLinkAndRedirect() {
        linkElement.href = links[currentIndex];

        // Automatically redirect to the updated link
        window.location.href = linkElement.href;
        
        //currentIndex = (currentIndex + 1) % links.length; // Cycle through the links
    }

    updateLinkAndRedirect();
});

