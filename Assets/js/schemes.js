fetch('Assets/data/schemes.json')
  .then(response => {
    if (!response.ok) throw new Error("Failed to load scheme data");
    return response.json();
  })
  .then(schemes => {
    const listContainer = document.getElementById('schemesList');

    schemes.forEach((scheme, index) => {
      const schemeDiv = document.createElement('div');
      schemeDiv.classList.add('scheme');

      const title = document.createElement('h3');
      title.textContent = `${scheme.name}`;
      title.addEventListener('click', () => {
        schemeDiv.classList.toggle('active');
      });

      const content = document.createElement('div');
      content.classList.add('scheme-content');
      content.innerHTML = `
        <p><strong>Launched:</strong> ${scheme.launched}</p>
        <p><strong>Objective:</strong> ${scheme.objective}</p>
        <p><strong>Benefit:</strong> ${scheme.benefit}</p>
      `;

      schemeDiv.appendChild(title);
      schemeDiv.appendChild(content);
      listContainer.appendChild(schemeDiv);
    });

    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function () {
      const query = this.value.toLowerCase();
      document.querySelectorAll('.scheme').forEach(div => {
        const name = div.querySelector('h3').textContent.toLowerCase();
        div.style.display = name.includes(query) ? 'block' : 'none';
      });
    });
  })
  .catch(err => {
    console.error("Error loading schemes:", err);
  });
