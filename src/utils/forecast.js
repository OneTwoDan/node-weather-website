const request = require('request')

function forecast(latitude, longitude, callback) {
    const url = `http://api.weatherstack.com/current?access_key=a37cfb7df4b4f405ad84cfc4acb2056c&query=${latitude},${longitude}`

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const temperature = body.current.temperature
            const feelslike = body.current.feelslike
            const weather = body.current.weather_descriptions[0]
            callback(undefined, `${weather}. It is currently ${temperature} degress out. It feels like ${feelslike} degress out.`)
        }
    })
}

module.exports = forecast