import React, { useEffect, useState } from 'react'
import styled, {keyframes} from 'styled-components'

const imageKF = keyframes`
    0% {
        transform: scale(0);
    }
    100% {
        transform: scale(1)
    }
`

const ImageStyle = styled.img`
    transform: scale(0);
    animation: ${imageKF} 1.5s ease-in-out forwards;
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
    // const [animation, setAnimation] = setAnimation
    const nasaData = props
    useEffect(()=>{
        // const img = document.querySelector('img')
        // console.log(ImageStyle.styledComponentId)
        // img.classList.toggle(ImageStyle.styledComponentId)
        // img.classList.toggle(ImageStyle.styledComponentId)
    }, [nasaData])

    return (
        <Div className="NASA">
            {<ImageStyle src={nasaData.nasaData.url}></ImageStyle>}
            <div>
                <h3>Image Info</h3>
                <p>Copyright: {nasaData.nasaData.copyright}</p>
                <p>Explnation:</p>
                <p>{nasaData.nasaData.explanation}</p>
            </div>
        </Div>
    )
}

export default Image