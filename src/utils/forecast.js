const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
const url = 'http://api.weatherstack.com/current?access_key=74355e18ce841ff8d75e8955d212cc9c&query=' + latitude + ',' + longitude + '&units=f';

request({ url, json: true }, (error, { body } = {}) => {
    if (error) {
        callback('Unable to connect to wether service!', undefined)
    } else if (body.error) {
        // console.log(response.body.error.info)
        callback('unable to find loction', undefined)
    } else {
        const data = body.current;
        console.log(body.current);
        callback(
            undefined,
            data.weather_descriptions[0] + '. It is currently ' + data.temperature +
            ' degress out. It feels like ' + data.feelslike + ' degress out. Humidity is: ' +
            data.humidity + '%. Cloud cover is: ' + data.cloudcover + '%'
        )
    }
})
}


module.exports = forecast