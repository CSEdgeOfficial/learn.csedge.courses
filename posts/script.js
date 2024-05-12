// Dummy data for demonstration
const documents = [
    {
        title: "How to Create a GitHub Account",
        url: "https://learn.csedge.courses/posts/github/how-to-create-github-account.html",
    },
    {
        title: "Creating a Professional LinkedIn Account",
        url: "https://learn.csedge.courses/posts/linkedin/creating-professional-linkedin-account.html",
    },
    {
        title: "How to make pull requests on GitHub",
        url: "https://learn.csedge.courses/posts/github/How-to-Make-Pull-Requests-on-GitHub.html",
    },
    {
        title: "How to Apply for GitHub Student Developer Pack",
        url: "https://learn.csedge.courses/posts/github/How-to-Apply-for-GitHub-Student-Developer-Pack.html",
    },
    {
        title: "How to Create an Azure Account and Get $200 in Credits",
        url: "https://learn.csedge.courses/posts/azure/How-to-Create-an-Azure-Account.html",
    },
    {
        title: "How to create a JSON Server",
        url: "https://learn.csedge.courses/posts/technology/How-to-create-a-JSON-Server.html",
    },
];

// Function to perform search
function search() {
    const searchTerm = document.getElementById("searchInput").value.trim().toLowerCase();

    // Clear search results if search term is empty
    if (searchTerm === "") {
        document.getElementById("searchResults").innerHTML = "";
        return;
    }

    const searchResults = documents.filter((doc) => doc.title.toLowerCase().includes(searchTerm));

    // Display search results
    if (searchResults.length > 0) {
        let suggestions = "<ul>";
        searchResults.forEach((doc) => {
            suggestions += `<a class="btn btn-outline-primary mt-2" href="${doc.url}">${doc.title}</a>`;
        });
        suggestions += "</ul>";
        document.getElementById("searchResults").innerHTML = suggestions;
    } else {
        document.getElementById(
            "searchResults"
        ).innerHTML = `<ul><a class="btn btn-outline-primary mt-2">No Matching Document Found.</a></ul>`;
    }
}

//Function for setting the scrollProgress for articles
function setScrollProgress() {
    const navBarContainer = document.querySelector(".navbar > .container");

    navBarContainer.innerHTML += '<div class="post__progress-bar"></div>';
    const progressBar = document.querySelector(".post__progress-bar");
    progressBar.style.width = `${
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
    }%`;
}

window.addEventListener("scroll", () => {
    setScrollProgress();
});

// Attach event listener to input field to trigger search on each character entry
document.getElementById("searchInput").addEventListener("input", search);
