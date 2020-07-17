const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=e232e346d3ef152b6c3d68f7fc178df9&query=' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const uv = body.current.uv_index

            if (uv <= 2.9) {
                uvIndex = 'low.'
            } else if (uv >= 3 & uv <= 5.9) {
                uvIndex = 'moderate.'
            } else if (uv >= 6 & uv <= 7.9) {
                uvIndex = 'high.'
            } else if (uv >= 8 & uv <= 10.9) {
                uvIndex = 'very high.'
            } else {
                uvIndex = 'extreme.'
            }

            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + 
            ' degress out at ' + body.location.name + ' and it feels like ' + body.current.feelslike + ' degrees out.'
            + ' The humidity is ' + body.current.humidity + ' and the UV index is ' + uvIndex)
        }
    })
}

module.exports = forecast