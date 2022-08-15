import { ForwardedRef, forwardRef } from "react"
import { QRCode } from "react-qrcode-logo"
import cn from "classnames"

import { transformWordsArrayToString } from "shared/utils"
import { themes } from "modules/generate/constants"

interface IQRCardProps {
    words: string[]
    title?: string

    theme: keyof typeof themes
}

export const QRCard = forwardRef(
    (
        { title, words, theme }: IQRCardProps,
        ref: ForwardedRef<HTMLDivElement>
    ) => {
        const classes = cn(
            "transition-all flex items-center p-8 rounded-xl shadow-2xl",
            {
                "w-500p h-72 justify-between": title,
                "justify-center w-72": !title
            },

            themes[theme]
        )

        return (
            <div ref={ref} className={classes}>
                {title && (
                    <h1 className={"text-4xl break-all text-white"}>{title}</h1>
                )}
                <QRCode
                    value={transformWordsArrayToString(words, title)}
                    qrStyle={"dots"}
                    eyeRadius={20}
                    bgColor={"transparent"}
                    fgColor={"white"}
                    size={200}
                />
            </div>
        )
    }
)
