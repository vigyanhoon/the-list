import React from 'react';
import { Drawer } from 'antd';
import { useHistory } from "react-router-dom";

interface Visible {
  visible: boolean
}

export const SideBar:React.FC<Visible> = props => {
  const history = useHistory();

  const onClose = () => {
    document.body.removeAttribute('style'); //fix for creating scrollbar blank area
    console.log('drawer closed')
  };

  const openPage = () => {
    document.body.removeAttribute('style'); //fix for creating scrollbar blank area
    history.push({pathname:"/page"})
  }

  const openDashboard = () => {
    history.push({pathname:"/dashboard"})
  }

  return (
    <Drawer
      title="Side Menu"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={props.visible}>

      <p onClick={openPage}>Inner page</p>
      <p onClick={openDashboard}>Dashboard</p>
      <p onClick={openPage}>Menu Item</p>
    </Drawer>
  )
}