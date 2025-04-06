document.addEventListener("DOMContentLoaded", function () {
    const cropId = localStorage.getItem("selectedCrop");

    if (!cropId) {
        document.getElementById("crop-details-container").innerHTML = "<p>No crop selected.</p>";
        return;
    }

    fetch("Assets/data/crops.json")
        .then(response => response.json())
        .then(data => {
            const crop = data.find(c => c.id === cropId);
            if (crop) {
                displayCropDetails(crop);
            } else {
                document.getElementById("crop-details-container").innerHTML = "<p>Crop not found.</p>";
            }
        })
        .catch(error => console.error("Error loading crop data:", error));
});

function displayCropDetails(crop) {
    const container = document.getElementById("crop-details-container");

    container.innerHTML = `
        <img src="${crop.image}" alt="${crop.name}">
        <h2>${crop.name}</h2>
        <p>${crop.info}</p>
        <h3>Best Season: ${crop.season}</h3>
        <h3>Soil Type: ${crop.soil}</h3>
    `;
}
