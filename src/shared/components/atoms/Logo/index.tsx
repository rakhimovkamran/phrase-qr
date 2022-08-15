import { FC } from "react"
import cn from "classnames"

interface ILogoProps {
    className?: string
    withAuthor?: boolean
}

export const Logo: FC<ILogoProps> = ({ className, withAuthor }) => {
    const classes = cn("text-4xl font-semibold flex items-center", className)

    return (
        <div className={"flex flex-col gap-2"}>
            <span className={classes}>
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
