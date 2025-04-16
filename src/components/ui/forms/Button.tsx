import { ButtonHTMLAttributes } from 'react'

export default function Button({ className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={`bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-200 ease-in-out ${className}`}
            {...props}
        />
    )
}
