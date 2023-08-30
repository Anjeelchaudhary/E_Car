"use client";
import { customButtonProps } from "@/types";
import Image from "next/image"

const CustomButton = ({ title, containerStyle, handleClick , btntype , textStyles , rightIcon}: customButtonProps) => {
    return (
        <button
            disabled={false}
            type={btntype||"button"}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}>
            <span className={`flex-1 ${textStyles}`}> {title} </span>
            {rightIcon && (<div>
                <Image src={rightIcon} alt="right icon" fill className="object-conatin" />
            </div>)}
        </button>
    )
}

export default CustomButton
