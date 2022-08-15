import { FC, ReactNode } from "react"
import { useNavigate } from "react-router-dom"

interface IActionButtonProps {
    children: ReactNode
}

export const ActionButton: FC<IActionButtonProps> = ({ children }) => {
    const navigate = useNavigate()

    const handleButtonClick = () => {
        navigate("/generate")
    }

    return (
        <button
            onClick={handleButtonClick}
            className={
                "mt-12 transition-all px-12 py-5 bg-blue-500 hover:bg-blue-600 shadow-xl shadow-blue-300 rounded-xl text-white transform hover:-translate-y-1"
            }>
            {children}
        </button>
    )
}
