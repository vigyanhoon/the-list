import React from 'react';
import Card from 'antd/es/card';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import { useHistory, Link } from "react-router-dom";
import CountriesTable from './Table/CountriesTable'

const Dashboard:React.FC<{}> = () => {
  const history = useHistory();

  return (
    <div className='dashboardContainer'>
      <h1>Dashboard</h1>
      <div className='cardContainer'>
        <Link to={{pathname:"/details/blue", state:{type:'blue'}}}>
          <Card className='blue' title='Blue'>
            <p>Fine</p>
          </Card>
        </Link>
        <Link to={{pathname:"/details/yellow", state:{type:'yellow'}}}>
          <Card className='yellow' title='Yellow'>
            <p>Warning</p>
          </Card>
        </Link>
        <Link to={{pathname:"/details/green", state:{type:'green'}}}>
          <Card className='green' title='Green'>
            <p>Good</p>
          </Card>
        </Link>
        <Link to={{pathname:"/details/red", state:{type:'red'}}}>
          <Card className='red' title='Red'>
            <p>Bad</p>
          </Card>
        </Link>
      </div>
      <div className='graphContainer'>
        <Card className='graph1' title='Graph1'>
          <Graph1/>
        </Card>
        <Card className='graph2' title='Graph2'>
          <Graph2/>
        </Card>
      </div>
      <CountriesTable/>
    </div>
  )
}

export default Dashboard