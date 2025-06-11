const container = document.getElementById("banners");

materias.forEach(materia => {
  const card = document.createElement("div");
  card.className = "materia-card";
  card.innerHTML = `
    <a href="${materia.link}">
      <video src="${materia.video}" autoplay muted loop playsinline></video>
      <p>${materia.titulo}</p>
    </a>
  `;
  container.appendChild(card);
});