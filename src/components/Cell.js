import React from "react";
export const Cell = ({ details, updateFlag, revealedCell }) => {
  const hoverColor = (e) => {
    if (!details.revealed) {
      e.target.style.backgroundColor = "#B9314F";
    }
  };
  const mouseOut = (e) => {
    if (details.revealed) e.target.style.backgroundColor = "#DEC3BE";
    if (!details.revealed) e.target.style.backgroundColor = "#2680A6";
  };
  const StyleNumber = {
    width: 40,
    height: 40,
    border: "2px hidden",
    cursor: details.revealed ? "default" : "pointer",
    margin: 10,
    backgroundColor: details.revealed ? "#DEC3BE" : "#2680A6",
    textAlign: "Center",
    marginTop : '20px ',
    textAlign :'Center',
    fontSize : '25px'
  };
  return (
    <div
      onContextMenu={(e, x, y) => updateFlag(e, details.x, details.y)}
      onClick={() => revealedCell(details.x, details.y)}
      style={StyleNumber}
      onMouseEnter={hoverColor}
      onMouseLeave={mouseOut}
    >
      {details.revealed ? (
        details.value === 'X' ? (
          <p>💣</p>
        ) : (
          details.value === 0 ? <p></p> : details.value
        )
      ) : (
        <p></p>
      )}
    </div>
  );
};

function onMouseOver(e) {
  e.target.style.backgroundColor = "#DEC3BE";
}
function onMouseOut(e) {
  e.target.style.backgroundColor = "#864832";
}
const styleActive = {
  width: 40,
  height: 40,
  border: "2px hidden",
  cursor: "pointer",
  backgroundColor: "#DEC3BE",
  textAlign: "Center",
};
