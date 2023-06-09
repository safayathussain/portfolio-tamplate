import { useRouter } from 'next/router';
import React from 'react'
import { HiArrowRight } from 'react-icons/hi';

const typeBasedClasses = (type) => {
    switch (type) {
        case 'primary':
            return 'px-5 py-3 bg-primary rounded-lg text-white flex items-center gap-2 hover:gap-4 duration-300'
        case 'secondary':
            return 'px-5 py-3 bg-white rounded-lg text-primary flex items-center gap-2 hover:gap-4 duration-300'
        case 'link':
            return 'text-primary'

        default:
            break;
    }
}

const Button = ({ type, className, children, onClick }) => {
    return (
        <button onClick={onClick} className={`${typeBasedClasses(type)} ${className}`}>
            {children}<HiArrowRight/>
        </button>
    )
}

export default Button