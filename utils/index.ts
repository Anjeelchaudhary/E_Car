// This part is not useableNow because we configured it into small fetchCars function
// import { Result } from "postcss";

import { FilterProps, CarProps } from "@/types";
import { Filter } from "mongodb";
import { type } from "os";

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

export async function fetchCars(filter: FilterProps) {

    const { manufacturer, year, fuel, limit, model } = filter;
    const headers = {
        'X-RapidAPI-Key': '11a6c5456bmsh015c0ce73ab9ee0p14c746jsnc011fea856cf',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers: headers,
    }
    );
    const result = await response.json();
    return result;
}
export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
    const url = new URL("https://cdn.imagin.studio/getimage");
    const { make, year, model } = car;

    // url.searchParams.append('customer', 'hrjavascript-mastery');
    // url.searchParams.append('make',make);
    // url.searchParams.append('modelFamily', model.split(' ')[0]);
    // url.searchParams.append('zoomType', 'fullscreen');
    // url.searchParams.append('modelYear', `${year}`);
    // url.searchParams.append('angle', `${angle}`);
    return `${url}`;
}

export const updateSearchParams = (type: string , value: string) => {
   const searchParams = new URLSearchParams(window.location.search);
   searchParams.set(type, value);

   const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
   return newPathname;
}