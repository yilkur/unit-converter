feather.replace()

let theme = 'light'
const iconLight = document.querySelector('.feather-sun')
iconLight.style.display = 'none'
const iconDark = document.querySelector('.feather-moon')

const convertBtn = document.getElementById('btn-convert')
const themeBtn = document.getElementById('theme-switcher')
const themeIconEl = document.querySelector('#theme-switcher i')
const inputEl = document.getElementById('input-num')
const resultLengthEl = document.querySelector('.result.length')
const resultVolumeEl = document.querySelector('.result.volume')
const resultMassEl = document.querySelector('.result.mass')

const convertToFeet = num => Number((num * 3.281).toFixed(3))
const convertToGallons = num => Number((num * 0.264).toFixed(3))
const convertToPounds = num => Number((num * 2.204).toFixed(3))

const convertToMeters = num => Number((num / 3.281).toFixed(3))
const convertToLiters = num => Number((num / 0.264).toFixed(3))
const convertToKilos = num => Number((num / 2.204).toFixed(3))

convertBtn.addEventListener('click', () => {
  const input = Number(inputEl.value)
  const resultFeet = convertToFeet(input)
  const resultGallons = convertToGallons(input)
  const resultPounds = convertToPounds(input)
  const resultMeters = convertToMeters(input)
  const resultLiters = convertToLiters(input)
  const resultKilos = convertToKilos(input)

  resultLengthEl.innerHTML = `${input} meters = ${resultFeet} feet <br> ${input} feet = ${resultMeters} meters`
  resultVolumeEl.innerHTML = `${input} liters = ${resultGallons} gallons <br> ${input} gallons = ${resultLiters} liters`
  resultMassEl.innerHTML = `${input} kilograms = ${resultPounds} pounds <br> ${input} pounds = ${resultKilos} kilos`
})

themeBtn.addEventListener('click', () => {
  if (theme === 'light') {
    theme = 'dark'
    iconLight.style.display = 'block'
    iconDark.style.display = 'none'
  } else {
    theme = 'light'
    iconDark.style.display = 'block'
    iconLight.style.display = 'none'
  }

  document.body.className = theme
})
