import React, {useEffect, useState} from 'react';
import { Card } from 'antd';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../store/tableData/actions'
import {AppState} from '../store'

const Dashboard:React.FC<{}> = () => {
  const dispatch = useDispatch()

  const {num, num2} = useSelector((state:AppState) => state.tableData)
  
  const history = useHistory();
  const cardClicked = (type:String) => {
    history.push({pathname:"/details/" + type, state:{type}})
  }

  const update = ()=>  {
    dispatch(fetchData())
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
      <p>{ num }</p>
      <p>{ num2}</p>
      <button onClick={update}>
        Add 1
      </button>
    </div>
  )
}

export default Dashboard