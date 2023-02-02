let holder = document.getElementById("holder");

let gridSize = 40;

window.onload = () => {
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let dot = document.createElement("div");

      dot.classList.add("dot");
      dot.style.animationDelay = `${Math.sin(i * j)}s`;

      holder.appendChild(dot);
    }
  }
};
