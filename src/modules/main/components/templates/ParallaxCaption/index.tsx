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
;<h2 className={"text-7xl text-white font-bold"}>
    Don&apos;t write your <span className={"text-dark-800"}>passphrase</span> on
    a piece of paper
</h2>
