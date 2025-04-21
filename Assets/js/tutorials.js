fetch('Assets/data/tutorials.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('tutorialsContainer');

    data.tutorials.forEach(tutorial => {
      const card = document.createElement('div');
      card.className = 'tutorial-card';

      card.innerHTML = `
        <h3>${tutorial.title}</h3>
        <p>${tutorial.description}</p>
        <iframe src="${tutorial.videoUrl}" allowfullscreen></iframe>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading tutorials:', error);
  });
