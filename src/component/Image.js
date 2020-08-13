import React from 'react'

const Image = (props) =>{

    const nasaData = props
    return (
        <div className="NASA">
            {<img src={nasaData.nasaData.url}></img>}
        </div>
    )
}

export default Image