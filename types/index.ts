import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "submit" | "button";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}

export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps { 
    manufacturer:string;
    year: number;
    fuel:string;
    limit: number;
    model:string;
}