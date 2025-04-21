let weatherData = [];

fetch('Assets/data/weatherData.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load weather data");
    return response.json();
  })
  .then(data => {
    weatherData = data;
    const selector = document.getElementById('regionSelector');

    // Add default option
    const defaultOption = document.createElement('option');
    defaultOption.textContent = "-- Select a Region --";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    selector.appendChild(defaultOption);

    // Populate dropdown
    data.forEach(region => {
      const option = document.createElement('option');
      option.value = region.region;
      option.textContent = region.region;
      selector.appendChild(option);
    });
  })
  .catch(error => {
    console.error("Error loading weather data:", error);
  });

document.getElementById('regionSelector').addEventListener('change', function () {
  const selectedRegion = this.value;
  const regionData = weatherData.find(r => r.region === selectedRegion);

  if (regionData) {
    document.getElementById('regionName').textContent = regionData.region;
    document.getElementById('summerTemp').textContent = regionData.summerTemp;
    document.getElementById('winterTemp').textContent = regionData.winterTemp;
    document.getElementById('rainfall').textContent = regionData.rainfall;
    document.getElementById('cropsList').textContent = regionData.suitableCrops.join(', ');

    // Decide image path dynamically
    const summerMax = parseInt(regionData.summerTemp.split('-')[1]);
    const winterMin = parseInt(regionData.winterTemp.split('-')[0]);
    const rainfallAmt = parseInt(regionData.rainfall);
    let imagePath = "Assets/images/summer.jpg"; // default image

    if (winterMin <= 10) {
      imagePath = "Assets/images/winter.jpg";
    } else if (rainfallAmt >= 600) {
      imagePath = "Assets/images/monsoon.jpg";
    }

    // Show image
    document.getElementById('seasonImage').src = imagePath;
    document.getElementById('seasonImage').alt = `Seasonal image for ${regionData.region}`;

    // Show card
    document.getElementById('weatherCard').classList.remove('hidden');
  } else {
    document.getElementById('weatherCard').classList.add('hidden');
  }
});
