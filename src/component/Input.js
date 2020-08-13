import React, {useEffect} from 'react'
import styled from 'styled-components'

const Form = styled.form `
    color: white;
    background-color: #282828;
    select {
        padding-right: 1%;
        border-radius: 10%;
    }
`

const Input = (props) => {
    const {yyyy, mm, dd, setYear, setMonth, setDay, changeDate} = props
    const years = []
    const months = []
    const days = []
    for (let x = 2020; x >= 1997; x--){
        years.push(x)
    }
    for (let x = 1; x <= 12; x++){
        months.push(x)
    }
    for (let x = 1; x <=31; x++){
        days.push(x)
    }
    const yearChange = eve => {
        const year = document.querySelector('#yearInput').value
        setYear(year)
    }
    const monthChange = eve => {
        const month = document.querySelector('#monthInput').value
        setMonth(month)
    }
    const dayChange = eve => {
        const day = document.querySelector('#dayInput').value
        setDay(day)
    }
    useEffect(()=>{
        changeDate()
    },[dd,mm,yyyy])

    return (
        <Form>
            <label>Year: &nbsp;
            <select 
                id="yearInput"
                name="year"
                onChange={() => yearChange()}
            >   
                <option></option>
                {
                    years.map(year =>{
                        return <option value={year} id='yearsel'>{year}</option>
                    })
                }   $
            </select>
            </label>
            <label>Month: &nbsp;
            <select 
                id="monthInput"
                name="month"
                onChange={() => monthChange()}
            >   
                <option></option>
                {
                    months.map(month =>{
                        return <option value={month}>{month}</option> 
                    })
                }   
            </select>
            </label>
            <label>Day: &nbsp;
            <select 
                id="dayInput"
                name="day"
                onChange={() => dayChange()}
            >   
                <option></option>
                {
                    days.map(day =>{
                        return <option value={day}>{day}</option> 
                    })
                }   
            </select>
            </label>
            <div><br></br></div>
        </Form>
    )
}

export default Input