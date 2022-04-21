import { randomTrue } from "./helpers/randomTrue";
import { Cell } from "./Cell";
import _ from "lodash";
export class CellularAutomata {
  cellSize = 10;
  columns = 30;
  rows = 30;
  cells: Cell[][];
  constructor() {
    this.cells = new Array(this.columns)
      .fill(new Array(this.rows).fill(false))
      .map((row) => row.map(() => new Cell()));
    console.log(this.cells);
    this.linkCells();
    setInterval(() => {
      this.nextTick();
    }, 1000);
  }
  nextTick() {
    const tmpCells = _.cloneDeep(this.cells);
    for (const row of tmpCells) {
      for (const cell of row) {
        if (cell.isAlive) {
          cell.isAlive =
            cell.totalAliveNeighbors === 2 || cell.totalAliveNeighbors === 3;
        } else {
          cell.isAlive = cell.totalAliveNeighbors === 3;
        }
      }
    }
    this.cells = tmpCells;
  }
  linkCells() {
    this.cells.map((row, rowIndex) =>
      row.map((cell, cellColumnIndex) => {
        cell.upCell = (this.cells[rowIndex - 1] ?? [])[cellColumnIndex];
        cell.downCell = (this.cells[rowIndex + 1] ?? [])[cellColumnIndex];
        cell.leftCell = (this.cells[rowIndex] ?? [])[cellColumnIndex - 1];
        cell.rightCell = (this.cells[rowIndex] ?? [])[cellColumnIndex + 1];
        cell.upLeftCell = (this.cells[rowIndex - 1] ?? [])[cellColumnIndex - 1];
        cell.upRightCell = (this.cells[rowIndex - 1] ?? [])[
          cellColumnIndex + 1
        ];
        cell.downLeftCell = (this.cells[rowIndex + 1] ?? [])[
          cellColumnIndex - 1
        ];
        cell.downRightCell = (this.cells[rowIndex + 1] ?? [])[
          cellColumnIndex + 1
        ];
        return cell;
      })
    );
  }
}
