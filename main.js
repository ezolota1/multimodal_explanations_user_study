let currentIndex = Math.floor(Math.random() * 2);

// Define an array of predetermined links
const links = [
    "https://docs.google.com/forms/d/e/1FAIpQLSc3uQuczP2M0Gu4wOhIgE11Pbn724DS672_-EmA0G1ZsyvHJA/viewform",
    "https://docs.google.com/forms/d/e/1FAIpQLScF-bqL3cuukz6mCXrOnk82k990B8lai-kWYlY4_hUgoE5Dsg/viewform"
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

