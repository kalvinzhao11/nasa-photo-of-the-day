import React from 'react'
import styled from 'styled-components'

const Foot = styled.header`
    background-color: #282828;
    color:white;
    margin: 0;
    padding: 1%;
`

const Footer = () => {
    return (
        <Foot>
            <p>Copyright © 2020 Kalvin Zhao. All rights reserved.</p>
        </Foot>
    )
}

export default Footer