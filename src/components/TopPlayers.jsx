import React from "react";
//  name, trading style, avatar, Xscore,
//  and average gain.
const TopPlayers = ({ players }) => {
  return (
    <div className="top-players">
      {players.map((player, index) => (
        <div key={index} className={`player-card ${index + 1}`}>
          <h3>{player.Rank}</h3>
          <img src={player.image} alt={player.name} />
          <h4>{player.Name}</h4>
          <p>{player.TradingStyle}</p>
          <p>Alerts: {player.Alerts}</p>
          <p>Xscore: {player.Xscore}</p>
          <p>Avg Gain: {player.AvgGain}</p>
          <button>Profile</button>
        </div>
      ))}
    </div>
  );
};

export default TopPlayers;
