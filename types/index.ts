import { MouseEventHandler } from "react";

// An interface specifies how a specific structure should look like
export interface customButtonProps {
    title: string,
    // It's optionnal
    containerStyles?: string,
    // A mouse event on a HTML button
    handleClick?: MouseEventHandler<HTMLButtonElement>,
    btnType?: "button" | "submit"
}

export interface searchManufacturerProps {
    manufacturer: string,
    // Setter state: a function that takes a strign, and returns nothing
    setManufacturer: (manufacturer: string) => void
}