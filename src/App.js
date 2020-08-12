import React, {useState, useEffect} from "react";
import axios from 'axios'
import {BASE_URL, API_KEY} from './constants'
import "./App.css";
import Header from "./component/Header"
import Image from "./component/Image"
import Input from "./component/Input"

function App() {

  const [nasaData, setNasaData] = useState()
  const [dates, setDates] = useState('')
  const [year, setYear] = useState()
  const [month, setMonth] = useState()
  const [day, setDay] = useState()

  useEffect(()=>{
    axios.get(`${BASE_URL}?api_key=${API_KEY[Math.floor(Math.random() * API_KEY.length)]}${dates}`)
      .then(response =>{
        // console.log(response)
        setNasaData(response.data)
      })
      .catch(error =>{
        // debugger
      })
  }, [])

  const changeDate = date => {
    // if !year, month, and day return
    if (!year || !month || !day) return
    //setdates
    setDates(`&date=${year}-${month}-${day}`)
  }

  if (!nasaData) return <div></div>
  return (
    <div className="App">
      <Header nasaData={nasaData}/>
      <Input 
      year={year}
      setYear={setYear}
      month={month}
      setMonth={setMonth}
      day={day}
      setDay={setDay}
      setYear={changeDate} //function
      />
      <Image nasaData={nasaData} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default App;
