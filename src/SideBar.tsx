import React from 'react';
import { Drawer } from 'antd';

interface Visible {
  visible: boolean
}

export const SideBar:React.FC<Visible> = props => {
  const onClose = () => {
    console.log('drawer closed')
  };

  return (
    <Drawer
      title="Basic Drawer"
      placement="right"
      closable={false}
      onClose={onClose}
      visible={props.visible}>

      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </Drawer>
  )
}