import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Header:React.FC<{}> = () => {
  return (
    <div className='header'>
      <FontAwesomeIcon icon={['fas', 'bars'] } size='2x'/>
    </div>
  )
}