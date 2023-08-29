// This part is not useableNow because we configured it into small fetchCars function
// import { Result } from "postcss";

// const url = 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '11a6c5456bmsh015c0ce73ab9ee0p14c746jsnc011fea856cf',
// 		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

export async function fetchCars() {
    const headers = {
            'X-RapidAPI-Key': '11a6c5456bmsh015c0ce73ab9ee0p14c746jsnc011fea856cf',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { 
        headers : headers , }
        );
    const result = await response.json();
    return result;
}