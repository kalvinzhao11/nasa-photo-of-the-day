import React from 'react'
import styled from 'styled-components'

const Head = styled.header`
    background-color: #282828;
    color:white;   
    margin: 0;
    h1{
        margin: 0;
        padding-top: 2%
    } 
    h2{
        margin: 0;
        padding-top: 2%;
        padding-bottom: 1%;
    } 
`

const Header = (props) =>{
    const nasaData = props
    return (
        <Head>
            <h1>NASA</h1>
            <h2>{nasaData.nasaData.title}</h2>
        </Head>
    )
    
}

export default Header