const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibGlhbWFyYWZlcnJlaXJhIiwiYSI6ImNrYzM3Y2Q2cDI0aG0yeW5hc2I3dGl2ODQifQ.PYRNLHgJw3S8Y2FPpp-lAA'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search.', undefined)
        } else {
            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode