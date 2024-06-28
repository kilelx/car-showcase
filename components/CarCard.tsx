"use client"

import { useState } from "react";
import { CarProps } from "@/types"
import Image from "next/image";

interface CarCardProps {
    car: CarProps
}

const CarCard = ({car} : 
    CarCardProps
) => {

    const [state, setState] = useState('');

  return (
    <div>CarCard</div>
  )
}

export default CarCard