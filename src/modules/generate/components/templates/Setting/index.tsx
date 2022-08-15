import { FC, ReactNode } from "react"
import cn from "classnames"

interface ISettingProps {
    children: ReactNode
    title: string

    className?: string
}

export const Setting: FC<ISettingProps> = ({ className, children, title }) => {
    const classes = cn("flex flex-col gap-2", className)

    return (
        <section className={classes}>
            <h2 className={"text-gray-700 text-lg border-b pb-2 mb-2"}>
                {title}
            </h2>

            {children}
        </section>
    )
}
