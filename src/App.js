import React, {useState, useEffect, Component} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import Header from "./component/Header"
import Image from "./component/Image"
import Input from "./component/Input"
import styled from 'styled-components'


function App() {

  const [nasaData, setNasaData] = useState()
  const [dates, setDates] = useState('')
  const [year, setYear] = useState(null)
  const [month, setMonth] = useState(null)
  const [day, setDay] = useState(null)

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY[Math.floor(Math.random() * API_KEY.length)]}${!dates ? '&date=2020-03-20': dates}`)
      .then(response =>{
        setNasaData(response.data)
      })
      .catch(error =>{
      })
  }, [dates])

  const changeDate = () => {
    // if !year, month, and day return
    if (!year || !month || !day ) return setDates(null)
    setDates(`&date=${year}-${month}-${day}`)

  }

  if (!nasaData) return <div><h1>Loading ...</h1></div>
  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      <Input 
      yyyy={year}
      mm={month}
      dd={day}
      setYear={setYear}
      setMonth={setMonth}
      setDay={setDay}
      changeDate={changeDate} //function
      />
      <Image nasaData={nasaData} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun<span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
