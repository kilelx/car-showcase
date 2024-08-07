"use client"

import { ShowMoreProps } from "@/types"
import { useRouter } from "next/navigation"
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";

const ShowMore = ({pageNumber, isNext}: ShowMoreProps) => {

    const router = useRouter();

    const handleNavigation = () => {
        // "PageNumber" equals to the number of car currently shown
        const newLimit = (pageNumber + 1) * 10
        const newPathName = updateSearchParams("limit", `${newLimit}`)

        console.log('click', newLimit);
        

        router.push(newPathName, {scroll: false})
    }

  return (
    <div className="w-full flex-center gap-5 mt-10">
        {
            // If we have more car to show
            !isNext && (
                <CustomButton
                    title="Show More"
                    btnType="button"
                    containerStyles="bg-primary-blue rounded-full text-white"
                    handleClick={handleNavigation}
                />
            )
        }
    </div>
  )
}

export default ShowMore