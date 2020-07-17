const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e232e346d3ef152b6c3d68f7fc178df9&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degress out at ' + body.location.name + '. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })
}

module.exports = forecast