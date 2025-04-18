import { ButtonHTMLAttributes } from 'react'

type ButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
    className?: string;
    isLoading?: boolean;
}

export default function Button({ className, isLoading, children, ...props }: ButtonProps) {
    return (
        <button
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out ${className}`}
            {...props}
        >
            {isLoading ? "..wait" : children}
        </button>
    )
}
