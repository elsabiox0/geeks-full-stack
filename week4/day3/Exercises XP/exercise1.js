const person = {
    name: 'badr',
    age: 20,
    location: {
        country: 'morocco',
        city: 'mohammedia',
        coordinates: [49.2827, -123.1207]
    }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);
