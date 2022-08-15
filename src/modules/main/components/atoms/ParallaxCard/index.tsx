import { FC } from "react"
import { Parallax } from "react-scroll-parallax"
import cn from "classnames"

import type { IParallaxCard } from "modules/main/types"

export const ParallaxCard: FC<IParallaxCard> = ({
    imagePath,
    speed,
    className
}) => {
    return (
        <Parallax speed={speed}>
            <img
                className={cn("h-48 shadow-xl rounded-xl", className)}
                src={imagePath}
                alt={"QR Card"}
            />
        </Parallax>
    )
}
