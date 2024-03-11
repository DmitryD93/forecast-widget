// Получить координаты
export const getGeoLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log('Широта:', latitude, 'Долгота:', longitude);
            return {latitude, longitude};

        }, function(error) {
            console.log('Ошибка получения геолокации:', error.message);
        });
    } else {
        console.log('Геолокация недоступна в вашем браузере');
    }
}

// Получить название места с помощью Google Maps Geocoding API
// export const getPlaceName = (latitude: number, longitude: number) => {
//     const geocoder = new google.maps.Geocoder();
//     const latlng = {lat: latitude, lng: longitude};
//     geocoder.geocode({location: latlng}, (results, status) => {
//         if (status === 'OK') {
//             if (results[0]) {
//                 const placeName = results[0].formatted_address;
//                 console.log('Название места:', placeName);
//                 return placeName;
//             }}
//     })
// }