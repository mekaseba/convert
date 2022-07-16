const length = document.getElementById("length")
const volume = document.getElementById("volume")
const mass = document.getElementById("mass")
let input = document.getElementById("input")
let btn = document.getElementById("convert")

btn.addEventListener("click", function() {
    const value = Number(input.value)
    if (isNaN(value)) {
        return;
    }
    const meterToFeet = value * 3.281
    const feetToMeter = value / 3.281
    length.textContent = `${value} meters = ${meterToFeet.toFixed(3)} feet | ${value} feet = ${feetToMeter.toFixed(3)} meters`
    const literToGallon = value * 0.264
    const gallonToLiter = value / 0.264
    volume.textContent = `${value} liters = ${literToGallon.toFixed(3)} gallons | ${value} liters = ${gallonToLiter.toFixed(3)} gallons`
    const kilogramToPound = value * 2.204
    const poundToKilogram = value / 2.204    
    mass.textContent = `${value} kilograms = ${kilogramToPound.toFixed(3)} pounds | ${value} pounds = ${poundToKilogram.toFixed(3)} killograms` 

})