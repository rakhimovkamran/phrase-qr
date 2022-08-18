import { FC, HTMLProps } from "react"
import cn from "classnames"

export const Input: FC<HTMLProps<HTMLInputElement>> = ({
    className,
    ...props
}) => {
    const classes = cn(
        "h-12 bg-gray-200 px-4 transition-all text-sm rounded-lg outline-none border-2 focus:border-blue-500 focus:bg-white focus:shadow-md",
        className
    )

    return <input spellCheck={false} className={classes} {...props} />
}
