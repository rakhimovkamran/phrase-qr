import { FC, ReactNode } from "react"
import { Parallax } from "react-scroll-parallax"
import cn from "classnames"

interface IParallaxCaptionProps {
    speed: number
    children: ReactNode
    className?: string
}

export const ParallaxCaption: FC<IParallaxCaptionProps> = ({
    speed,
    children,
    className
}) => {
    return (
        <section className={cn("w-full py-32 flex items-center", className)}>
            <Parallax className={"container mx-auto flex"} speed={speed}>
                {children}
            </Parallax>
        </section>
    )
}
