import { Parallax } from "react-scroll-parallax"
import { ActionButton } from "modules/main/components/atoms"

export const Intro = () => {
    return (
        <section
            className={
                "container mt-24 sm:mt-32 md:mt-48 lg:mt-0 mx-auto h-screen flex-col lg:flex-row flex items-center justify-center lg:justify-between"
            }>
            <section className={"flex items-center lg:items-start flex-col"}>
                <h1
                    className={
                        "text-4xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-center lg:text-left font-bold leading-tight"
                    }>
                    Generate QR Card <br /> For your crypto&apos;s <br />
                    <span className={"text-blue-600"}>Passphrase</span>
                </h1>

                <ActionButton>Create your own</ActionButton>
            </section>

            <Parallax className={"mt-12"} speed={15}>
                <img
                    src={"./images/qr-cards/collage.png"}
                    className={"h-full sm:h-350p xl:h-450p"}
                    alt={"qr-cards-collage"}
                />
            </Parallax>
        </section>
    )
}
