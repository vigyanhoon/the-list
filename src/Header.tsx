import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {SideBar} from './SideBar'

export const Header:React.FC<{}> = () => {

  const [drawerVisible, setDrawerVisible] = useState(false)

  const toggerDrawer = ()=> {
    setDrawerVisible(currentDrawerVisible => !currentDrawerVisible)
  }

  return (
    <div className='header'>
      <div className='drawerIcon' onClick={toggerDrawer}>
        <FontAwesomeIcon icon={['fas', 'bars'] } size='2x'/>
        <SideBar visible={drawerVisible}></SideBar>
      </div>
    </div>
  )
}