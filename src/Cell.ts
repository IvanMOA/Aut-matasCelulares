import { randomTrue } from "./helpers/randomTrue";
export class Cell {
  isAlive: boolean;
  upCell?: Cell;
  downCell?: Cell;
  leftCell?: Cell;
  rightCell?: Cell;
  upLeftCell?: Cell;
  upRightCell?: Cell;
  downLeftCell?: Cell;
  downRightCell?: Cell;
  m = 0;
  constructor() {
    this.isAlive = randomTrue(0.5);
  }
  get neighbors(): (Cell | undefined)[] {
    return [
      this.upCell,
      this.downCell,
      this.leftCell,
      this.rightCell,
      this.upLeftCell,
      this.upRightCell,
      this.downLeftCell,
      this.downRightCell,
    ];
  }
  get totalAliveNeighbors(): number {
    return this.neighbors.filter((neighbor) => neighbor?.isAlive).length;
  }
}
