import React from 'react';
import { Card } from 'antd';
import Graph1 from './Graph1.jsx';
import Graph2 from './Graph2.jsx';

export default function Dashboard() {

  function cardClicked(e) {
    console.log(e);
  }

  return (
    <div className='dashboardContainer'>
      <h1>Dashboard</h1>
      <div className='cardContainer'>
        <Card className='blue' title='Blue' onClick={cardClicked.bind(this, 'blue')}>
          <p>Fine</p>
        </Card>
        <Card className='yellow' title='Yellow' onClick={cardClicked.bind(this, 'yellow')}>
          <p>Warning</p>
        </Card>
        <Card className='green' title='Green' onClick={cardClicked.bind(this, 'green')}>
          <p>Good</p>
        </Card>
        <Card className='red' title='Red' onClick={cardClicked.bind(this, 'red')}>
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