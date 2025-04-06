document.addEventListener("DOMContentLoaded", function () {
    let cropsData = [];

    fetch("Assets/data/crops.json")
        .then(response => response.json())
        .then(data => {
            cropsData = data;
            displayCrops(cropsData);
        })
        .catch(error => console.error("Error loading crop data:", error));

    document.getElementById("search-bar").addEventListener("input", function (e) {
        const searchText = e.target.value.toLowerCase();
        const filteredCrops = cropsData.filter(crop => crop.name.toLowerCase().includes(searchText));
        displayCrops(filteredCrops);
    });
});

function displayCrops(crops) {
    const container = document.getElementById("crops-container");
    container.innerHTML = "";

    crops.forEach(crop => {
        const cropCard = document.createElement("div");
        cropCard.classList.add("crop-card");

        cropCard.innerHTML = `
            <img src="${crop.image}" alt="${crop.name}">
            <h3>${crop.name}</h3>
            <p>${crop.info}</p>
            <button onclick="viewCropDetails('${crop.id}')">View Details</button>
        `;

        container.appendChild(cropCard);
    });
}

function viewCropDetails(cropId) {
    localStorage.setItem("selectedCrop", cropId);
    window.location.href = "crop-details.html";
}
