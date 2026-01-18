let funFacts = [];

fetch("./resources/funfacts.txt")
  .then(response => response.text())
  .then(text => {
    funFacts = text
      .split("\n")
      .map(line => line.trim())
      .filter(line => line.length > 0);
  })
  .catch(error => {
    console.error("Error loading fun facts:", error);
  });

document.getElementById("fun-fact-button").addEventListener("click", () => {
  if (funFacts.length == 0) return;

  const randomIndex = Math.floor(Math.random() * funFacts.length);
  document.getElementById("fun-fact-text").textContent =
    funFacts[randomIndex];
});
