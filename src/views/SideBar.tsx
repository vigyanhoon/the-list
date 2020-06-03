import React from 'react';
import { Drawer } from 'antd';
import { Link } from "react-router-dom";

interface Visible {
  visible: boolean
}

const SideBar:React.FC<Visible> = props => {
  const onClose = () => {
    document.body.removeAttribute('style'); //fix for creating scrollbar blank area
    console.log('drawer closed')
  };

  return (
    <Drawer
      title="Side Menu"
      placement="left"
      closable={false}
      onClose={onClose}
      visible={props.visible}>

      <Link to={{pathname:"/page"}}>
        <p>Inner page</p>
      </Link>

      <Link to={{pathname:"/dashboard"}}>
        <p>Dashboard</p>
      </Link>

      <Link to={{pathname:"/page"}}>
        <p>Menu Item</p>
      </Link>
    </Drawer>
  )
}

export default SideBar