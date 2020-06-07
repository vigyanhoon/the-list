import React from 'react';
import {Pagination} from 'antd';

interface Props {
  current:number
  total:number;
  pageSize:number;
  onChange:(page:number)=>void;
}

const TablePagination: React.FC<Props> = (props) => {
  const startNum = props.pageSize * (props.current - 1) + 1
  let endNum = props.pageSize * (props.current)
  endNum = endNum > props.total ? props.total : endNum

  return (
    <div className='paginationContainer'>
      <div>Displaying {startNum} to {endNum} of {props.total}
      </div>
      <Pagination current={props.current} total={props.total} 
                  pageSize={props.pageSize} showSizeChanger={false}
                  onChange={props.onChange}/>
    </div>
  )
}

export default TablePagination