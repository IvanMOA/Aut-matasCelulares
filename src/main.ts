import p5 from "p5";
import "./style.css";
import { CellularAutomata } from "./CellularAutomata";
const _app = new p5((p5Instance) => {
  const p = p5Instance as unknown as p5;
  const cellularAutomata = new CellularAutomata();
  const width = cellularAutomata.columns * cellularAutomata.cellSize;
  const height = cellularAutomata.rows * cellularAutomata.cellSize;
  p.setup = function setup() {
    p.createCanvas(width, height);
  };
  p.draw = function draw() {
    p.clear();
    cellularAutomata.cells.forEach((row, rowIndex) => {
      row.forEach((cell, columnIndex) => {
        console.log(columnIndex);
        if (cell.isAlive) {
          p.noStroke();
          p.fill("#14b8a6");
          p.rect(
            columnIndex * cellularAutomata.cellSize,
            rowIndex * cellularAutomata.cellSize,
            cellularAutomata.cellSize,
            cellularAutomata.cellSize
          );
        }
      });
    });
  };
}, document.getElementById("app")!);
