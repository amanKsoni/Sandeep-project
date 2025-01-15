

import React from "react";

const PlayerList = ({ players }) => {
  
  return (
    <table className="player-list">
      <thead>
        <tr>
          <th>Serial number</th>
          <th>Name</th>
          <th>TradingStyle</th>
          <th>Trophies</th>
          <th>Rank</th>
          <th>Streaks</th>
          <th>Alerts</th>
          <th>Trades</th>
          <th>Avg Gain</th>
          <th>Xscore</th>
        </tr>
      </thead>
      <tbody>
        {players.map((player, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{player.Name}</td>
            <td>{player.TradingStyle}</td>
            <td>{player.Trophies}</td>
            <td>{player.Rank}</td>
            <td>{player.Streaks}</td>
            <td>{player.Alerts}</td>
            <td>{player.Trades}</td>
            <td>{player.AvgGain}</td>
            <td>{player.Xscore}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PlayerList;
