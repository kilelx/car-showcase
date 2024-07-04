import { MouseEventHandler } from "react";

// An interface specifies how a specific structure should look like
export interface CustomButtonProps {
    title: string;
    // It's optionnal
    containerStyles?: string;
    // A mouse event on a HTML button
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
    isDisabled?: boolean;
}

export interface SearchManufacturerProps {
    manufacturer: string;
    // Setter state: a function that takes a strign, and returns nothing
    setManufacturer: (manufacturer: string) => void;
}

export interface CarProps {
    city_mpg:number;
    class:string;
    combination_mpg:number;
    cylinders:number;
    displacement:number;
    drive:string;
    fuel_type:string;
    highway_mpg:number;
    make:string;
    model:string;
    transmission:string;
    year:number;
}

export interface FilterProps {
    manufacturer: string;
    model: string;
    year: number;
    fuel: string;
    limit: number
}

interface OptionProps {
    title: string;
    value: string
}
export interface CustomFilterProps {
    title: string;
    options: OptionProps[]
}