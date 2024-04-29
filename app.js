const grid = document.querySelector(".grid");
const btn = document.querySelector(".btn");

const COLORS = [
  "#ff0000", // Red
  "#ffff00", // Yellow
  "#00ff00", // Green
  "#0000ff", // Blue
  "#ff00ff", // Magenta
  "#00ffff", // Cyan
  "#808080", // Gray
  "#ffffff", // White
  "#000000", // Black
  "#F44336", // Red (Material Design)
  "#FFEB3B", // Yellow (Material Design)
  "#4CAF50", // Green (Material Design)
  "#2196F3", // Blue (Material Design)
  "#9C27B0", // Violet (Material Design)
  "#3F51B5", // Indigo (Material Design)
  "#E91E63", // Pink (Material Design)
  "#03A9F4", // Light Blue (Material Design)
  // Randomly generated colors
  "#C70039",
  "#FFC300",
  "#38B61C",
  "#007BFF",
  "#D81B60",
  "#85C1E9",
  "#EEFF41",
  "#673AB7",
  "#43A047",
  "#F8F9FA",
  "#A52A2A",
  "#FFA75B",
  "#7CFC00",
  "#C02942",
  "#17A2B8",
  "#DC3545",
  "#28A745",
  "#FFF9C4",
  "#9D38BD",
  "#7F8C8D",
  "#FFCC99",
  "#FFEBEE",
  "#E8EAF6",
  "#90A4AE",
  "#DCE775",
  "#CDDC39",
  "#FFFACD",
  "#FADBD8",
];

let boxOpacity = 0;

const generateGrid = (range = 16) => {
  grid.innerHTML = "";
  const gridSize = range;
  for (let i = 0; i < gridSize; i++) {
    const row = document.createElement("div");
    row.classList.add("row");
    grid.appendChild(row);
    for (let j = 0; j < gridSize; j++) {
      const col = document.createElement("div");
      col.classList.add("col");
      col.style.width = 500 / gridSize + "px";
      col.style.height = 500 / gridSize + "px";
      col.style.border = "1px solid black";
      row.appendChild(col);
      col.addEventListener("mouseover", () => {
        const randomColor = Math.floor(Math.random() * (29 - 0 + 1)) + 0;
        col.style.backgroundColor = COLORS[randomColor];
        col.style.opacity = boxOpacity;
        boxOpacity += 0.1;
        console.log(boxOpacity);
      });
    }
  }
};

btn.addEventListener("click", () => {
  const range = Number(prompt("enter the range"));
  generateGrid(range);
});

generateGrid();
