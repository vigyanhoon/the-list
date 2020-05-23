import React from 'react';
import { Card } from 'antd';
import {Graph1} from './Graph1';
import {Graph2} from './Graph2';
import { useHistory } from "react-router-dom";

export const Dashboard:React.FC<{}> = () => {
  
  const history = useHistory();
  const cardClicked = (type:String) => {
    history.push({pathname:"/details/" + type, state:{type}})
  }

  return (
    <div className='dashboardContainer'>
      <h1>Dashboard</h1>
      <div className='cardContainer'>
        <Card className='blue' title='Blue' onClick={() => cardClicked('blue')}>
          <p>Fine</p>
        </Card>
        <Card className='yellow' title='Yellow' onClick={() => cardClicked('yellow')}>
          <p>Warning</p>
        </Card>
        <Card className='green' title='Green' onClick={() => cardClicked('green')}>
          <p>Good</p>
        </Card>
        <Card className='red' title='Red' onClick={() => cardClicked('red')}>
          <p>Bad</p>
        </Card>
      </div>
      <div className='graphContainer'>
        <Card className='graph1' title='Graph1'>
          <Graph1/>
        </Card>
        <Card className='graph2' title='Graph2'>
          <Graph2/>
        </Card>
      </div>
    </div>
  )
}