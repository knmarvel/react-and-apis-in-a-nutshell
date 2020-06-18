import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [shoes, setShoes] = useState()
  const [manufacturers, setManufacturers] = useState()
  const [shoeTypes, setShoeTypes] = useState()
  const [shoeColors, setShoeColors] = useState()

  useEffect(() => {
    fetch("http://localhost:8000/shoe/")
    .then(response => response.json())
    .then(data => setShoes(data))

    fetch("http://localhost:8000/manufacturer/")
    .then(response => response.json())
    .then(data => setManufacturers(data))

    fetch("http://localhost:8000/shoe-color/")
    .then(response => response.json())
    .then(data => setShoeColors(data))

    fetch("http://localhost:8000/shoe-type/")
    .then(response => response.json())
    .then(data => setShoeTypes(data))
  }, [])

  const getManufacturerInfo = (shoe) => {
    let man = manufacturers.results.filter(manufacturer =>{
      return manufacturer.url === shoe.manufacturer
    })
    return (
        <a href={man[0].website}>{man[0].name}</a>
    )
  }

  const getColorInfo = (shoe) => {
    let color = shoeColors.results.filter(color =>{
      return color.url === shoe.color
    })
    const colors = {
      "R": "Red",
      "O": "Orange",
      "Y": "Yellow",
      "G": "Green",
      "B": "Blue",
      "I": "Indigo",
      "V": "Violet",
      "W": "White",
      "BK": "Black"
    }
    return colors[color[0].color_name]
  }

  const getTypeInfo = (shoe) => {
    let type = shoeTypes.results.filter(type =>{
      return type.url === shoe.shoe_type
    })
    return type[0].style
  }
  
  return (
    <div className="App">
      We got shoes!
      {shoes && shoes.results.map(shoe => 
      <div key={shoes.results.indexOf(shoe)}>
        <div>
          <h2>{shoe.brand_name} </h2>
        </div>
        <div>
          <b> Color: </b> {shoeColors && getColorInfo(shoe)}
        </div>
        <div>
          <b>Manufacturer: </b> {manufacturers && getManufacturerInfo(shoe)}
        </div>
        <div>
          <b>Material: </b> {shoe.material}
        </div>
        <div>
          <b>Shoe Type:</b> {shoeTypes && getTypeInfo(shoe)}
        </div>
        <div>
          <b>Size: </b> {shoe.size}
        </div>
      </div>)
      }
    </div>
  );
}

export default App;
