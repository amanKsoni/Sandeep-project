import React from "react";
import { findMaxByKey } from "./utils";

const KEY_VS_LABEL={
  'Trades':'Max Trades Taken',
  "Xscore":'max Xscore ',
  'Streaks': 'max Streaks achived',
  'Alerts':'max Alerts reached'
}


const StatsCard=({data,dataKey})=>{
  console.log(data)
  return (
    <div className="statsCard">
      <img src={data.image} alt={data.Name} />
      <div>
        <div>{KEY_VS_LABEL[dataKey]}</div>
        <p>{data.Name}</p>
      </div>
      <div className="score">{data[dataKey]}</div>
    </div>
  )

}

const Stats = ({ stats=[] }) => {

  return (
    <div className="stats">
      <StatsCard data={findMaxByKey(stats,'Trades')} dataKey={'Trades'} />
      <StatsCard data={findMaxByKey(stats,'Xscore')} dataKey={'Xscore'} />
      <StatsCard data={findMaxByKey(stats,'Streaks')} dataKey={'Streaks'} />
      <StatsCard data={findMaxByKey(stats,'Alerts')} dataKey={'Alerts'} />
    </div>
  );
};

export default Stats;
