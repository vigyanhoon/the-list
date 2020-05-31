import React from 'react';
import {
  useLocation
} from "react-router-dom";

const CardDetails:React.FC<{}> = () => {
  const location = useLocation();
  const state = location.state as any;
  const style: React.CSSProperties = {
    'backgroundColor': state.type
  }
  return (
    <div style={style}>
      details  {JSON.stringify(state.type)}
    </div>
  )
}

export default CardDetails