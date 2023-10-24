
function showAbout() {
    window.location.href = "https://jjeongah.github.io";
}

function showPublications() {
    window.location.href = "https://jjeongah.github.io/publications";
}

function showProjects() {
    window.location.href = "https://jjeongah.github.io/projects";
}

function showCV() {
    window.location.href = "https://drive.google.com/file/d/1ViAhyEpV-rP8_7GoUuzFvA7GLaSN0T8-/view?usp=share_link";
}

function navigateToProject(projectId) {
    // Construct the URL based on the projectId
    var newUrl = "https://jjeongah.github.io/projects/" + projectId;
    // Redirect to the constructed URL
    window.location.href = newUrl;
}

