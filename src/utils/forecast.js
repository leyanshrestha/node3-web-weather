const request = require('request')

const forecast = (longtitude, latitude, callback) => {
    const url = 'https://api.darksky.net/forecast/35d9f1711fe37bb8a7ec0ac4b613938a/' + longtitude + ',' + latitude + '?units=si'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find locaiton', undefined)
        } else {
            const temperature = body.currently.temperature
            const probability = body.currently.precipProbability
            callback(undefined, 'It is currently ' + temperature + 'degrees out.There is a ' + probability + '% chance of rain')
        }
    })
}

module.exports = forecast