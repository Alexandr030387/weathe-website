const request = require('postman-request');

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWxleDAzMDM4NyIsImEiOiJjbGJqbWo2N20xNGthM3ZwOGFpbm5jOHBrIn0.8DwIoqLdOQDWb5FTzrLOVQ&limit=1';

    request({ url, json: true }, (error, { body } = {}) => {
        if (error) {
            calback(' Unable to connect geolocation service', undefined)
        } else if (body.message || (body && body.features.length <= 0)) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const data = body.features[0];

            callback(undefined, {
                latitude: data.center[1],
                longitude: data.center[0],
                location: data.place_name
            })
        }
    })
}

module.exports = geocode