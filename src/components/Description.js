import React from 'react'

function Description({description, trailer}) {
  return (
    <div>
      <iframe src={trailer} width='420px' height= '300px' ></iframe>
      <p>{description}</p>
    </div>
  )
}

export default Description