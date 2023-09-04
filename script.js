// Define an array of predetermined links
const links = [
    "https://www.oslobodjenje.ba/",
    "https://www.avaz.ba/",
    "https://www.klix.ba/"
];

const linkElement = document.getElementById("link");
let userCount = 0;

// Function to update the link and redirect
function updateLinkAndRedirect() {
    userCount++;
    const linkIndex = userCount % links.length;
    linkElement.href = links[linkIndex];
}

// Initial setup
updateLinkAndRedirect();

// Add a click event listener to the link
linkElement.addEventListener("click", function(e) {
    // Prevent the default link behavior
    e.preventDefault();

    // Redirect the user to the updated link
    window.location.href = linkElement.href;
});
