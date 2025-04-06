document.addEventListener("DOMContentLoaded", function () {
    console.log("Home page loaded successfully");

    const ctaButton = document.querySelector(".cta-button");
    if (ctaButton) {
        ctaButton.addEventListener("mouseover", function () {
            ctaButton.style.transform = "scale(1.1)";
        });
        ctaButton.addEventListener("mouseout", function () {
            ctaButton.style.transform = "scale(1)";
        });
    }

    const featureLinks = document.querySelectorAll(".feature a");
    featureLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            link.style.color = "goldenrod";
        });
        link.addEventListener("mouseout", function () {
            link.style.color = "black";
        });
    });

    // Event listener for crop details
    const cropItems = document.querySelectorAll(".crop-item");
    const cropDetails = document.querySelector("#crop-details");

    cropItems.forEach(item => {
        item.addEventListener("click", function () {
            const cropName = this.dataset.name;
            fetch("../Assets/data/crops.json")
                .then(response => response.json())
                .then(data => {
                    const cropInfo = data.find(crop => crop.name === cropName);
                    if (cropInfo) {
                        cropDetails.innerHTML = `
                            <h2>${cropInfo.name}</h2>
                            <img src="../Assets/images/${cropInfo.image}" alt="${cropInfo.name}" style="width: 100%; max-width: 400px; border-radius: 10px;">
                            <p><strong>Season:</strong> ${cropInfo.season}</p>
                            <p><strong>Climate:</strong> ${cropInfo.climate}</p>
                            <p><strong>Soil Type:</strong> ${cropInfo.soil}</p>
                            <p><strong>Water Requirement:</strong> ${cropInfo.water}</p>
                            <p><strong>Benefits:</strong> ${cropInfo.benefits}</p>
                        `;
                    }
                });
        });
    });
});
