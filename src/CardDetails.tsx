import React from 'react';
import {
  useLocation
} from "react-router-dom";

export const CardDetails:React.FC<{}> = () => {
  const location = useLocation();
  const state = location.state as any;
  const style:any = {
    'background-color': state.type
  }
  return (
    <div style={style}>
      details  {JSON.stringify(state.type)}
    </div>
  )
}