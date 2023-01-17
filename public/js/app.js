const weatheForm = document.querySelector('form')
const search = document.querySelector('input')
const messgeOne = document.querySelector('#error')
const messgeTwo = document.querySelector('#forecast')

weatheForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const location = search.value
    messgeOne.textContent = 'Loading...';
    messgeTwo.textContent = '';

    fetch('/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messgeOne.textContent =data.error;
            } else {
                messgeOne.textContent = 'Location: ' + data.location;
                messgeTwo.textContent = 'Forecast: ' + data.forecast;
            }
        })
    })
})