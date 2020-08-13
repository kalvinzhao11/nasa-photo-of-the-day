import React, { useEffect } from 'react'
import styled, {keyframes} from 'styled-components'

const imageKF = keyframes`
    0% {
        transform: scale(0);
    }
    50% {
        transform: scale(1.2)
    }
    100% {
        transform: scale(1)
    }
`

const ImageStyle = styled.img`
    transform: scale(0);
    animation: ${imageKF} 1s ease-in-out forwards;
    width: 75%;
`

const Div = styled.div `
    background-color: #707070;
    display:flex;
    justify-content: space-evenly;
    padding: 1%;
    color: white;
`

const Image = (props) =>{

    const nasaData = props

    return (
        <Div className="NASA">
            {<ImageStyle key={nasaData.nasaData.url} src={nasaData.nasaData.url}></ImageStyle>}
            <div>
                <h3>Image Info</h3>
                <p>Copyright: {!nasaData.nasaData.copyright ? 'null' : nasaData.nasaData.copyright}</p>
                <p>Explnation:</p>
                <p>{nasaData.nasaData.explanation}</p>
            </div>
        </Div>
    )
}

export default Image