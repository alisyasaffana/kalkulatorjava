script.js
const numbers = document.querySelectorAll(".number")
console.log(numbers)

const numbers = document.querySelectorAll(".number")
numbers.forEach( (number) => {
  number.addEventListener("click", () => {
console.log("number is pressed")
})
})

const numbers = document.querySelectorAll(".number")
numbers.forEach( (number) => {
  number.addEventListener("click", (event) => {
console.log(event.target.value)
})
})

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
numbers.forEach( (number) => {
  number.addEventListener("click", (event) => {
console.log(event.target.value)
})
})

