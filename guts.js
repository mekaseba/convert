const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
let input = document.getElementById("input")
let btn = document.getElementById("convert")

btn.addEventListener("click", function() {
    const value = Number(input.value)
    const meterToFeet = value * 3.281
    const feetToMeter = value / 3.281
    length.textContent = `${value} meters = ${meterToFeet} feet | ${value} feet = ${feetToMeter} meters`
    const literToGallon = value * 0.264
    const gallonToLiter = value / 0.264
    volume.textContent = `${value} liters = ${literToGallon} gallons | ${value} liters = ${gallonToLiter} gallons`
    const kilogramToPound = value * 2.204
    const poundToKilogram = value / 2.204    
    mass.textContent = `${value} kilograms = ${kilogramToPound} pounds | ${value} pounds = ${poundToKilogram} killograms` 
    if (isNaN(value)) {
        return;
      }
})

