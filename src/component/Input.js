import React, {useState} from 'react'

const Input = () => {
    const years = []
    const months = []
    const days = []
    for (let x = 2020; x >= 1950; x--){
        years.push(x)
    }
    for (let x = 1; x <= 12; x++){
        months.push(x)
    }
    for (let x = 1; x <=28; x++){
        days.push(x)
    }
    console.log(years)
    return (
        <form>
            <label>Year: &nbsp;
            <select 
                id="yearInput"
                name="year"
                onChange={onchange}
            >   
                <option disabled='true' ></option>
                {
                    years.map(year =>{
                        return <option value=''>{year}</option> 
                    })
                }   
            </select>
            </label>
            <label>Month: &nbsp;
            <select 
                id="monthInput"
                name="month"
                onChange={onchange}
            >   
                <option disabled='true' ></option>
                {
                    months.map(month =>{
                        return <option value=''>{month}</option> 
                    })
                }   
            </select>
            </label>
            <label>Day: &nbsp;
            <select 
                id="dayInput"
                name="day"
                onChange={onchange}
            >   
                {
                    days.map(day =>{
                        return <option value={day}>{day}</option> 
                    })
                }   
            </select>
            </label>
        </form>
    )
}

export default Input