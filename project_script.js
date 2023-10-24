
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
    window.open("files/Resume_Jeongah.pdf");
}


function navigateToProject(projectId) {
    // Construct the URL based on the projectId
    var newUrl = "https://jjeongah.github.io/projects/" + projectId;
    // Redirect to the constructed URL
    window.location.href = newUrl;
}

