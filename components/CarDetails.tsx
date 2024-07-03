import { CarProps } from "@/types";

interface CarDetailsProps {
    isOpen: boolean;
    // A function that doesn't return anything
    closeModal: () => void;
    car: CarProps
}

const CarDetails = ({isOpen, closeModal, car} : CarDetailsProps) => {
  return (
    <div>CarDetails</div>
  )
}

export default CarDetails