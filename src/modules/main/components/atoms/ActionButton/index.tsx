import { FC, ReactNode } from "react"

interface IActionButtonProps {
    children: ReactNode
}

export const ActionButton: FC<IActionButtonProps> = ({ children }) => {
    return (
        <button
            className={
                "mt-12 transition-all px-12 py-5 bg-blue-500 hover:bg-blue-600 shadow-xl shadow-blue-300 rounded-xl text-white transform hover:-translate-y-1"
            }>
            {children}
        </button>
    )
}
