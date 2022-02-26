export default (row, col, bombs) => {
  let board = [];
  let mineLocation = [];
  // Create blank board

  // x = column
  for (let x = 0; x < row; x++) {
    let subCol = [];
    for (let y = 0; y < col; y++) {
      subCol.push({
        value: 0,
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      });
    }
    board.push(subCol);
  }

  // Randomize Bomb Placement
  let bombsCount = 0;
  while (bombsCount < bombs) {
    let x = randomNum(0, row - 1);
    let y = randomNum(0, col - 1);

    if (board[x][y].value === 0) {
      board[x][y].value = "X";
      mineLocation.push([x, y]);
      bombsCount++;
    }
  }

  // Add Numbers
  for (let roww = 0; roww < row; roww++) {
    for (let coll = 0; coll < col; coll++) {
      if (board[roww][coll].value === "X") {
        continue;
      }

      // X on the left
      if (roww > 0 && board[roww - 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      // X is beneath and on the left
      if (
        roww > 0 &&
        coll < col - 1 &&
        board[roww - 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // X is beneath 
      if (coll < col - 1 && board[roww][coll + 1].value === "X") {
        board[roww][coll].value++;
      }

      // X is beneath and on the Right
      if (
        roww < row - 1 &&
        coll < col - 1 &&
        board[roww + 1][coll + 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // X is on the right 
      if (roww < row - 1 && board[roww + 1][coll].value === "X") {
        board[roww][coll].value++;
      }

      // X is on top - Right
      if (
        roww < row - 1 &&
        coll > 0 &&
        board[roww + 1][coll - 1].value === "X"
      ) {
        board[roww][coll].value++;
      }

      // X is on the top
      if (coll > 0 && board[roww][coll - 1].value === "X") {
        board[roww][coll].value++;
      }

      // X is on the Top left
      if (roww > 0 && coll > 0 && board[roww - 1][coll - 1].value === "X") {
        board[roww][coll].value++;
      }
    }
  }
  return { board, mineLocation };
};

function randomNum(min = 0, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}