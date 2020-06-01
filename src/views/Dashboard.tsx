import React, {useEffect, useState} from 'react';
import { Card, Spin } from 'antd';
import Graph1 from './Graph1';
import Graph2 from './Graph2';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import {fetchData} from '../store/tableData/actions'
import {AppState} from '../store'
import {getCountries} from '../store/countries/actions'
import {Country} from '../store/countries/types'

const Dashboard:React.FC<{}> = () => {
  const dispatch = useDispatch()
  const {data, error, loading} = useSelector((state:AppState) => state.countriesData)
  
  const history = useHistory();
  const cardClicked = (type:String) => {
    history.push({pathname:"/details/" + type, state:{type}})
  }

  useEffect(()=>{
    dispatch(getCountries())
  }, [])

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
      <Spin spinning={loading} delay={500}>
        <div>
          {
            data.map((country:Country,index:number)=>
            {
              return <p key={index}>{country.Rank}</p>
            }) 
          }
        </div>
        <button onClick={update}>
          Add 1
        </button>
      </Spin>
      
    </div>
  )
}

export default Dashboard