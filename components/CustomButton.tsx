"use client";
import { customButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({ title, containerStyle, handleClick , btntype }: customButtonProps) => {
    return (
        <button
            disabled={false}
            type={btntype||"button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}>
            <span className={`flex-1`}> {title} </span>
        </button>
    )
}

export default CustomButton
