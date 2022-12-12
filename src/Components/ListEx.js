import React from 'react'

export default function ListEx() {
    const cars = ["Nano","800","Breeza","Thar"]
const listCars = cars.map((i) =>i );

    return (
      <h1>{listCars}</h1>
    )
  }


