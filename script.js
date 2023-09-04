// Define an array of predetermined links
const links = [
    "https://example.com/link1",
    "https://example.com/link2",
    "https://example.com/link3"
];

const linkElement = document.getElementById("link");
let userCount = 0;

// Function to update the link and redirect
function updateLinkAndRedirect() {
    const linkIndex = userCount % links.length;
    linkElement.href = links[linkIndex];
    userCount++;
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
