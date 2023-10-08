document.addEventListener("DOMContentLoaded", function () {
    const searchForm = document.getElementById("searchForm");
    const resultsDiv = document.getElementById("results");

    searchForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the form from submitting (we'll handle it with JavaScript)

        // Get user input values
        const product = document.getElementById("productInput").value;
        const budget = parseFloat(document.getElementById("budgetInput").value);

        // For this example, let's simulate search results (images and descriptions) and display them
        const searchResults = [
            {
                image: "Images/Headphone1.jpg",
                description: "Product 1: This is a high-quality product that fits your budget.",
            },
            {
                image: "Images/Headphone2.jpg",
                description: "Product 2: Another great option within your budget range.",
            },
            {
                image: "Images/Headphone2.jpg",
                description: "Product 2: Another great option within your budget range.",
            },
            {
                image: "Images/Headphone2.jpg",
                description: "Product 2: Another great option within your budget range.",
            },
            {
                image: "Images/Headphone2.jpg",
                description: "Product 2: Another great option within your budget range.",
            },
        ];

        // Clear previous results
        resultsDiv.innerHTML = "";

        // Display search results
        searchResults.forEach((result) => {
            const resultCard = document.createElement("div");
            resultCard.classList.add("result-card");

            const imageElement = document.createElement("img");
            imageElement.src = result.image;
            imageElement.alt = "Product Image";

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = result.description;

            resultCard.appendChild(imageElement);
            resultCard.appendChild(descriptionElement);

            resultsDiv.appendChild(resultCard);
        });
    });
});
