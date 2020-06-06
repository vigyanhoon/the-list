import React from 'react';
import {Pagination} from 'antd';

interface Props {
  current:number
  total:number;
  pageSize:number;
  onChange:(page:number)=>void;
}

const TablePagination: React.FC<Props> = (props) => {
  return (
    <div className='paginationContainer'>
      <div>Displaying page __ of __ </div>
      <Pagination current={1} total={props.total} 
                  pageSize={props.pageSize} showSizeChanger={false}
                  onChange={props.onChange}/>
    </div>
  )
}

export default TablePagination