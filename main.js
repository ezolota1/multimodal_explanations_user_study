let currentIndex = Math.floor(Math.random() * 6);

// Define an array of predetermined links
const links = [
    "https://xai-uni-ulm.limesurvey.net/818213?lang=en",
    "https://xai-uni-ulm.limesurvey.net/661954?lang=en",
    "https://xai-uni-ulm.limesurvey.net/676186?lang=en",
    "https://xai-uni-ulm.limesurvey.net/794323?lang=en",
    "https://xai-uni-ulm.limesurvey.net/165286?lang=en",
    "https://xai-uni-ulm.limesurvey.net/659126?lang=en"

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

