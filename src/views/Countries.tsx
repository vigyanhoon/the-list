import React, {useEffect, useState} from 'react';
import {AppState} from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../store/countries/actions'
import {Country} from '../store/countries/types'
import { Spin, message, Card } from 'antd';

const Countries:React.FC<{}> = () => {
  const dispatch = useDispatch()
  const {data, error, loading} = useSelector((state:AppState) => state.countriesData)

  useEffect(()=>{
    dispatch(getCountries())
  }, [])

  useEffect(()=>{
    if(error) {
      message.error(error);
    }
  }, [error])

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <Card className='coutriesCard' title='Countries'>
          <table className='coutriesTable'>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Country</th>
                <th>Population</th>
                <th>Population %</th>
                <th>Date</th>
                <th>Source</th>
              </tr>
            </thead>
            <tbody>
              {
                data.map((country:Country,index:number)=>
                {
                  return <tr key={index}>
                    <td>{country.Rank}</td>
                    <td>{country.Country}</td>
                    <td>{country.Population}</td>
                    <td>{country["Population %"]}</td>
                    <td>{country.Date}</td>
                    <td>{country.Source}</td>
                  </tr>
                })
              }
            </tbody>
          </table>
        </Card>
      </Spin>
    </div>
  )
}

export default Countries