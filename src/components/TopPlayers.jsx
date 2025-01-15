import React from "react";
import { getRankSuffix } from "./utils";
//  name, trading style, avatar, Xscore,
//  and average gain.
const TopPlayers = ({ players }) => {
  return (
    <div className="top-players">
      {players.map((player, index) => (
        <div key={index} className={`player-card ${index + 1}`}>
            <h3>{getRankSuffix(player.Rank)}</h3>
          <div className="imgContainer">
            <img src={player.image} alt={player.name} />
            <div>Xscore: {player.Xscore}</div>
          </div>
          <div>
            <h4>{player.Name}</h4>
            <p>{player.TradingStyle}</p>
          </div>
          <div className="topPlayedDetail">
            <div>
              <p>{player.Alerts}</p>
              <p>Alerts</p>
            </div>
            <div>
              <p>{player.Trades}</p>
              <p>Trades</p>
            </div>
            <div>
              <p>{player.AvgGain}</p>
              <p>Avg Gain</p>
            </div>
          </div>
          <button>Profile</button>
        </div>
      ))}
    </div>
  );
};

export default TopPlayers;
