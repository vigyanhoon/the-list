import React, {useEffect, useState} from 'react';
import {AppState} from '../store'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../store/countries/actions'
import {Country} from '../store/countries/types'
import { Spin, message } from 'antd';

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
        <div>
          {
            data.map((country:Country,index:number)=>
            {
              return <p key={index}>{country.Rank}</p>
            })
          }
        </div>
      </Spin>
    </div>
  )
}

export default Countries