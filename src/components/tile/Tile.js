import React from "react";

export const Tile = (props) => {
  return (
    <div className="tile-container">
      {Object.values(props.tile).map((item, index) => {
        return <p key={index} className={index === 0 ? "tile-title": "tile"}>
          {item}
        </p>
      }
      )}
    </div>
  );
};
