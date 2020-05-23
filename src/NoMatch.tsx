import React from 'react';

export const NoMatch:React.FC<{}> = () => {
  return (
    <div>
      <h3>No match for <code>{JSON.stringify(location)}</code></h3>
  </div>
  )
}