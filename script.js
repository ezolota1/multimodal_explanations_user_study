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

    // Add a click event listener to the link
    linkElement.addEventListener("click", function(e) {
        e.preventDefault(); // Prevent the default link behavior
        window.location.href = linkElement.href; // Redirect the user to the updated link
    });
});

