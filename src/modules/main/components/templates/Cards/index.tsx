import { FC } from "react"
import { Parallax } from "react-scroll-parallax"

import type { IParallaxCard } from "modules/main/types"
import { ParallaxCard } from "modules/main/components/atoms"

interface ICardsProps {
    cards: IParallaxCard[]
}

export const Cards: FC<ICardsProps> = ({ cards }) => {
    return (
        <section className={"w-full py-32 flex items-center"}>
            <section className={"container mx-auto flex flex-col"}>
                <Parallax speed={24}>
                    <h1 className={"text-7xl font-bold leading-tight"}>
                        Instead of this, you can create{" "}
                        <span className={"text-blue-500"}>beautiful cards</span>{" "}
                        with QR Codes of your wallet&apos;s passphrase
                    </h1>
                </Parallax>

                <section className={"mt-24 flex gap-8"}>
                    {cards.map((card, idx) => (
                        <ParallaxCard key={idx} {...card} />
                    ))}
                </section>
            </section>
        </section>
    )
}
