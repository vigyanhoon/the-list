import React, {useEffect} from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SideBar from './SideBar'
import Button from 'antd/es/button';
import message from 'antd/es/message'
import firebase from 'firebase/app'
import { useHistory } from "react-router-dom";

const Header:React.FC<{}> = () => {

  const [drawerVisible, setDrawerVisible] = useState(false)
  const history = useHistory();

  const toggerDrawer = ()=> {
    setDrawerVisible(currentDrawerVisible => !currentDrawerVisible)
  }

  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log('current user is ' + firebase.auth().currentUser?.email)
      } else {
        history.push('/')
      }
    });
  })

  const logout = () => {
    const isOK = window.confirm('Are you sure?')
    if (isOK) {
      firebase.auth().signOut().then(function () {
        history.push('/')
      }).catch(function (error) {
        showError('Logout failed ' + error);
      });
    }
  }

  const showError = (text:string) => {
    message.error(text);
  };

  return (
    <div className='header'>
      <div className='drawerIcon' onClick={toggerDrawer}>
        <FontAwesomeIcon icon={['fas', 'bars'] } size='2x'/>
        <SideBar visible={drawerVisible}></SideBar>
      </div>
      <Button type='primary' onClick={logout}>Logout</Button>

    </div>
  )
}

export default Header