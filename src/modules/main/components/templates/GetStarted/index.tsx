import { Parallax } from "react-scroll-parallax"
import { ActionButton } from "modules/main/components/atoms"

export const GetStarted = () => {
    return (
        <section className={"w-full py-32 flex items-center"}>
            <section
                className={
                    "container mx-auto flex items-center justify-center flex-col"
                }>
                <Parallax speed={10}>
                    <h2
                        className={
                            "text-7xl text-center font-bold leading-tight"
                        }>
                        Let&apos;s get started!
                    </h2>
                </Parallax>

                <ActionButton>Create QR Card</ActionButton>
            </section>
        </section>
    )
}
