document.addEventListener("DOMContentLoaded", function() {
    // Define an array of predetermined links
    const links = [
        "https://www.avaz.ba/",
        "https://www.klix.ba/",
        "https://www.oslobodjenje.ba/"
    ];

    const linkElement = document.getElementById("link");
    let currentIndex = 0;

    // Function to update the link and redirect
    function updateLinkAndRedirect() {
        linkElement.href = links[currentIndex];
        currentIndex = (currentIndex + 1) % links.length; // Cycle through the links
    }

    // Initial setup
    updateLinkAndRedirect();

    // Automatically redirect to the updated link after 2 seconds
    setTimeout(function() {
        window.location.href = linkElement.href;
    }, 2000); // Redirect every 2 seconds (adjust as needed)
});
