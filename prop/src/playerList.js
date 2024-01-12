import React from "react";
import Players from "./Player";
import PlayersData from "./players";
const PlayersList = () => {
    return (
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {PlayersData.map((Player, index) => (
          <Players
            key={index}
            name={Player.name}
            team={Player.team}
            nationality={Player.nationality}
            jerseynumber={Player.jerseynumber}
            age={Player.age}
            imageUrl={Player.imageUrl}
          />
        ))}
      </div>
    );
  };
  
  export default PlayersList;