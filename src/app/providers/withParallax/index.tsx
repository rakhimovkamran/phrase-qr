import { ReactNode } from "react"
import { ParallaxProvider } from "react-scroll-parallax"

export const withParallax = (component: () => ReactNode) => () =>
    <ParallaxProvider>{component()}</ParallaxProvider>
