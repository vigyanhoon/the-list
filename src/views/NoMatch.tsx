import React from 'react';

const NoMatch:React.FC<{}> = () => {
  return (
    <div>
      <h3>No match for <code>{JSON.stringify(location)}</code></h3>
  </div>
  )
}

export default NoMatch