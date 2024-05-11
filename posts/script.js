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
// functions for nav bar
const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");
searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("uil-search", "uil-times");
  }
  searchIcon.classList.replace("uil-times", "uil-search");
});
navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("uil-times", "uil-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

// Function to perform search
function search() {
  const searchTerm = document
    .getElementById("searchInput")
    .value.trim()
    .toLowerCase();

  // Clear search results if search term is empty
  if (searchTerm === "") {
    document.getElementById("searchResults").innerHTML = "";
    return;
  }

  const searchResults = documents.filter((doc) =>
    doc.title.toLowerCase().includes(searchTerm)
  );

  // Display search results
  if (searchResults.length > 0) {
    let suggestions = "<ul>";
    searchResults.forEach((doc) => {
      suggestions += `<li><a href="${doc.url}">${doc.title}</a></li>`;
    });
    suggestions += "</ul>";
    document.getElementById("searchResults").innerHTML = suggestions;
  } else {
    document.getElementById("searchResults").innerHTML =
      "No matching documents found.";
  }
}

// Attach event listener to input field to trigger search on each character entry
document.getElementById("searchInput").addEventListener("input", search);
