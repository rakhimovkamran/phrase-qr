import { FC } from "react"
import cn from "classnames"
import { useNavigate } from "react-router-dom"

interface ILogoProps {
    className?: string
    withAuthor?: boolean
}

export const Logo: FC<ILogoProps> = ({ className, withAuthor }) => {
    const classes = cn(
        "text-4xl font-semibold flex items-center cursor-pointer",
        className
    )

    const navigate = useNavigate()

    const handleLogoClick = () => {
        navigate("/")
    }

    return (
        <div className={"flex flex-col gap-2"}>
            <span onClick={handleLogoClick} className={classes}>
                phrase
                <span className={"text-blue-600"}>qr</span>
            </span>

            {withAuthor && (
                <span className={"text-xs ml-2"}>
                    by
                    <a
                        href={"https://twitter.com/rakhimovkamran"}
                        rel={"noreferrer"}
                        target={"_blank"}
                        className={"text-blue-600 ml-1"}>
                        Kamran
                    </a>
                </span>
            )}
        </div>
    )
}
