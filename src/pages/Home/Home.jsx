import React, { useState, useEffect } from 'react'
import Dropdown from '../../components/Dropdown/Dropdown'
import Layout from '../../components/Layout/Layout'
import { energy, kilometers, vehicles, years } from '../../data/vehicle'
import { loanRate, passengers } from '../../data/banking.js'

import './Home.scss'

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0].rate)
  const [selectedEnergy, setSelectedEnergy] = useState(energy[0].rate)
  const [selectedKilometers, setSelectedKilometers] = useState(kilometers[0].rate)
  const [selectedYear, setSelectedYear] = useState(years[0].rate)
  const [selectedPassengers, setSelectedPassengers] = useState(passengers[0].rate)
  const [score, setScore] = useState('')
  const [rate, setRate] = useState('')

  const handleChange = (e, setStateFunction) => {
    setStateFunction(e.target.value)
  }

  useEffect(() => {
    setScore(
      parseFloat(selectedVehicle) +
        parseFloat(selectedEnergy) +
        parseFloat(selectedKilometers) +
        parseFloat(selectedYear),
    )
  }, [selectedVehicle, selectedEnergy, selectedKilometers, selectedYear])

  useEffect(() => {
    console.log(score)
    if (parseFloat(score) >= 0 && parseFloat(score) <= 40) {
      const calculRate = loanRate.find((item) => {
        return score <= parseFloat(item.score)
      })
      console.log(calculRate, selectedPassengers, parseFloat(selectedPassengers), parseFloat(calculRate.rate))
      setRate(parseFloat(calculRate.rate) + parseFloat(selectedPassengers))
      console.log(rate)
    }
  }, [selectedPassengers, score])

  return (
    <Layout className="home">
      <h2>Simulateur d’emprunt pour l’achat d’une voiture</h2>
      <h3>Choix d'un véhicule</h3>
      <div className="simulator">
        <Dropdown
          textLabel="Type de véhicule"
          name="vehicles"
          data={vehicles}
          selectedValue={selectedVehicle}
          handleChange={(e) => handleChange(e, setSelectedVehicle)}
        />
        <Dropdown
          textLabel="Énergie"
          name="energy"
          data={energy}
          selectedValue={selectedEnergy}
          handleChange={(e) => handleChange(e, setSelectedEnergy)}
        />
        <Dropdown
          textLabel="Kilométrage"
          name="kilometers"
          data={kilometers}
          selectedValue={selectedKilometers}
          handleChange={(e) => handleChange(e, setSelectedKilometers)}
        />
        <Dropdown
          textLabel="Années"
          name="years"
          data={years}
          selectedValue={selectedYear}
          handleChange={(e) => handleChange(e, setSelectedYear)}
        />
        <Dropdown
          textLabel="Nombre de passagers"
          name="passengers"
          data={passengers}
          selectedValue={selectedPassengers}
          handleChange={(e) => handleChange(e, setSelectedPassengers)}
        />
      </div>

      <section className="score">
        <div className="container bg--green">
          <p>{(rate * 100).toFixed(2)}%</p>
        </div>
      </section>
    </Layout>
  )
}
