export async function fetchCars() {
    const headers = {
        'x-rapidapi-key': '8b8b9335bcmsh6f58a5f174ab811p1d3b14jsneffafdf1255c',
        'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });

    const result = await response.json();

    return result;
}