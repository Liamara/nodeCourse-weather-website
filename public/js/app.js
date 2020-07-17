const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')
const msg3 = document.querySelector('#msg3')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    msg1.textContent = 'Loading...'
    msg2.textContent = ''
    msg3.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                msg1.textContent = ''
                msg3.textContent = data.error
                document.getElementById('local').value = ''
            } else {
                msg1.textContent = ''
                msg2.textContent = data.location
                msg3.textContent = data.forecast
                document.getElementById('local').value = ''
            }
        })
    })
})