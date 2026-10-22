"use strict";

// Mantiene el año del pie de página actualizado.
const yearElement = document.querySelector("#year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Ajusta los saltos internos a la altura real de la barra, también en celular.
const headerElement = document.querySelector(".site-header");

if (headerElement && "ResizeObserver" in window) {
  const headerObserver = new ResizeObserver(() => {
    document.documentElement.style.setProperty(
      "--header-height",
      `${headerElement.getBoundingClientRect().height}px`
    );
  });
  headerObserver.observe(headerElement);
}

// Comparador provisional para revisar las propuestas sin recargar la página.
const backgroundPreview = document.querySelector(".background-preview");
const nextBackground = document.querySelector("#next-background");
const backgroundLabel = document.querySelector("#background-label");
const backgrounds = [
  { id: "a", name: "A · Ondas pastel" },
  { id: "b", name: "B · Nubes suaves" },
  { id: "c", name: "C · Nubes intensas" },
  { id: "d", name: "D · Bruma diagonal" },
  { id: "e", name: "E · Seda pastel" },
];

if (backgroundPreview && nextBackground && backgroundLabel) {
  const updateBackgroundLabel = () => {
    const current = backgrounds.find((item) => item.id === document.body.dataset.fondo);
    backgroundLabel.textContent = current.name;
  };

  updateBackgroundLabel();
  backgroundPreview.hidden = false;
  nextBackground.addEventListener("click", () => {
    const currentIndex = backgrounds.findIndex((item) => item.id === document.body.dataset.fondo);
    document.body.dataset.fondo = backgrounds[(currentIndex + 1) % backgrounds.length].id;
    updateBackgroundLabel();
  });
}
