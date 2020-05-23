import React from 'react';
import {
  useLocation
} from "react-router-dom";

export const CardDetails:React.FC<{}> = () => {
  const location = useLocation();

  return (
    <div>
      details  {JSON.stringify(location)}
    </div>
  )
}