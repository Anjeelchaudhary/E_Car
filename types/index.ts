import { MouseEventHandler } from "react";

export interface customButtonProps {
    title: string;
    containerStyle?: string;
    handleClick?:
    MouseEventHandler<HTMLButtonElement>;
    btntype?: "submit" | "button";
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void;
}