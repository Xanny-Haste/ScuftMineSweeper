import React, { useEffect, useState } from "react";
import createBoard from "../Logic/CreateBoard";
import { Cell } from "./Cell";
import { revealed } from "../Logic/reveal.js";
import { Time } from "./Timer";

export const Board = () => {
  const [grid, setGrid] = useState([]);
  const [nonMineCount, setNonMineCount] = useState(0);
  const [minesLocations, setMinesLocations] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [newTime, setTime] = useState(0);
  useEffect(() => {
    //Create board

    freshStart();
  }, []);

  const freshStart = () => {
    const newBoard = createBoard(8, 8, 16);
    setNonMineCount(8 * 8 - 16);
    setMinesLocations(newBoard.mineLocation);
    setGrid(newBoard.board);
  };

  const restartGame = () => {
    setGameOver(false);
    freshStart();
  };

  // On Right Click
  const updateFlag = (e, x, y) => {
    e.preventDefault();
    let newGrid = JSON.parse(JSON.stringify(grid));
    console.log(newGrid[x][y]);
    newGrid[x][y].flagged = true;
    setGrid(newGrid);
    console.log("Right Click");
  };

  // On Left Click
  const revealedCell = (x, y) => {
    if (!gameOver) {
      let newGrid = JSON.parse(JSON.stringify(grid));
      if (newGrid[x][y].value === "X") {
        for (let i = 0; i < minesLocations.length; i++)
          newGrid[minesLocations[i][0]][minesLocations[i][1]].revealed = true;

        setGrid(newGrid);
        setGameOver(true);
      } else {
        let newReaveledBoard = revealed(newGrid, x, y, nonMineCount);
        setGrid(newReaveledBoard.arr);
        setNonMineCount(newReaveledBoard.newNonMinesCount);
        if (newReaveledBoard.newNonMinesCount === 0) {
          setGameOver(true);
        }
      }
    }
  };

  const hoverColor = (e) => {
    e.target.style.background = "#3A0CA3";
    e.target.style.transition = "1s";
  };
  const exitColor = (e) => {
    e.target.style.background = "#F55D3E";
  };

  if (!grid) {
    return <div>Loading ...</div>;
  }
  return (
    <div>
      <Time gameOver={gameOver} setTime={setTime} newTime={newTime} />
      <div style={{ marginTop: "40px" }}>
        {grid.map((SingleRow, index1) => {
          return (
            <div style={{ display: "flex", textAlign: "center" }} key={index1}>
              {SingleRow.map((singleBlock, index2) => {
                return (
                  <Cell
                    revealedCell={revealedCell}
                    details={singleBlock}
                    updateFlag={updateFlag}
                    key={`${index1} - ${index2}`}
                  />
                );
              })}
            </div>
          );
        })}
        {gameOver &&
          (nonMineCount === 0 ? (
            <p style={{ fontSize: "32px", marginTop: "40px", color: "green" }}>
              You Won !
            </p>
          ) : (
            <p style={{ fontSize: "32px", marginTop: "40px", color: "red" }}>
              You Lost !
            </p>
          ))}
        {gameOver && (
          <button
            style={{
              border: "2px hidden",
              padding: "15px 55px 15px 55px",
              marginTop: "50px",
              fontSize: "28px",
              borderRadius: "20px",
              background: "#F55D3E",
            }}
            onMouseEnter={(e) => hoverColor(e)}
            onMouseLeave={(e) => exitColor(e)}
            onClick={() => restartGame()}
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};
