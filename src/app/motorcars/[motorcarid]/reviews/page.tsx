import React from 'react'

const page = ({params} : {params : {motorcarid : string}}) => {
  return (
    <>
    <div>
        <div>
            <h1>Car Reviews</h1>
            <h2>Expand all Reviews about MotorCar # {params.motorcarid}</h2>
        </div>
    </div>
    </>
  )
}

export default page
