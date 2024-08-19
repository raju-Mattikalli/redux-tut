import React from 'react'

function user(props) {
    const {data} = props;
  return (
    <div>user Component
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>

    </div>
    
  )
}

export default user