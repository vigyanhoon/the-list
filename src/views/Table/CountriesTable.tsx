import React, {useEffect, useState} from 'react';
import {AppState} from '../../store'
import { useDispatch, useSelector } from 'react-redux'
import {getCountries} from '../../store/countries/actions'
import {Country} from '../../store/countries/types'
import { Spin, message, Card, Input } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import NumberMenu from './Menu'
import TablePagination from './Pagination'

const CountriesTable:React.FC<{}> = () => {
  const dispatch = useDispatch()
  const {data, error, loading} = useSelector((state:AppState) => state.countriesData)
  const [rowCount, setRowCount] = useState(10)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchedText, setSearchedText] = useState('')

  useEffect(()=>{
    dispatch(getCountries())
  }, [])

  useEffect(()=>{
    if(error) {
      message.error(error);
    }
  }, [error])

  const updateRowCount = (count:number) => {
    setRowCount(count)
    setCurrentPage(1)
  }

  const getFilteredData = () => {
    let countriesData:Country[] = [...data];

    if(searchedText) {
      const searched = searchedText.toLowerCase();
      countriesData = countriesData.filter((country) => {
        if (country.Country.toLowerCase().indexOf(searched) !== -1 ||
          country.Date.toLowerCase().indexOf(searched) !== -1 ||
          country.Population.toLowerCase().indexOf(searched) !== -1 ||
          country["Population %"].toLowerCase().indexOf(searched) !== -1 ||
          country.Rank.toLowerCase().indexOf(searched) !== -1 ||
          country.Source.toLowerCase().indexOf(searched) !== -1) {
            return country
          }
      })
    }

    const startIndex = (currentPage-1)*rowCount
    const endIndex = currentPage*rowCount
    console.log(startIndex, endIndex)
    return countriesData.slice(startIndex, endIndex)
  }

  return (
    <div>
      <Spin spinning={loading} delay={500}>
        <Card className='coutriesCard' title='Countries'>
          <div className='filters'>
            <label>
              Show
              <NumberMenu setRowCount={updateRowCount} rowCount={rowCount}/>
              Entries
            </label>
            <div className='searchFilter'>
              <p>Search:</p>
              <Input  value={searchedText}
                      onChange={(e)=>setSearchedText(e.target.value)}
                      suffix={
                              <FontAwesomeIcon 
                                icon={['far', 'times-circle']}
                                onClick={()=>setSearchedText('')}/>
                      }/>
            </div>
          </div>
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
                getFilteredData().map((country:Country,index:number)=>
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
          <TablePagination current={currentPage} total={data.length} pageSize={rowCount}
            onChange={(page) => setCurrentPage(page)}/>
          {currentPage}
        </Card>
      </Spin>
    </div>
  )
}

export default CountriesTable