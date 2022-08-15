import { FC } from "react"

import cn from "classnames"
import { themes } from "modules/generate/constants"

interface IThemeButtonProps {
    onClick: (theme: string) => void
    selectedTheme: string
    theme: string
}

export const ThemeButton: FC<IThemeButtonProps> = ({
    selectedTheme,
    theme,
    onClick
}) => {
    const classes = cn(
        themes[theme],
        "rounded-full scale-90 transform transition-all w-10 h-10",
        {
            "shadow-lg scale-100 opacity-100": selectedTheme === theme,
            "opacity-50": selectedTheme !== theme
        }
    )

    return <button onClick={() => onClick(theme)} className={classes} />
}
