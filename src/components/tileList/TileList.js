import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
      {props.tiles.map((tile, index) => {
         return <Tile
          key={index}
          tile={tile}
        /> 
      })}
    </div>
  );
};
