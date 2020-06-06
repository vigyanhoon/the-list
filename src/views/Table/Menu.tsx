import React from 'react';
import { Dropdown, Menu, } from 'antd';

interface Props {
  rowCount:number;
  setRowCount:(numSelected:number) => void;
}

const NumberMenu: React.FC<Props> = (props) => {

  const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => props.setRowCount(10)}>
          10
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => props.setRowCount(50)}>
          50
      </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" rel="noopener noreferrer" onClick={() => props.setRowCount(100)}>
          100
      </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <Dropdown overlay={menu} trigger={['click']}>
      <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
        {props.rowCount}
      </a>
    </Dropdown>
  )
}

export default NumberMenu