import React, {useState} from 'react'

const Image = (props) =>{

    const nasaData = props
    console.log(nasaData)
    return (
        <div className="NASA">
            {<img src={nasaData.nasaData.url}></img>}
        </div>
    )
}

export default Image