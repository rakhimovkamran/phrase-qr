import { Parallax } from "react-scroll-parallax"
import { ActionButton } from "modules/main/components/atoms"

export const Intro = () => {
    return (
        <section
            className={
                "container mx-auto h-screen flex items-center justify-between"
            }>
            <section>
                <h1 className={"text-7xl font-bold leading-tight"}>
                    Generate QR Card <br /> For your crypto&apos;s <br />
                    <span className={"text-blue-600"}>Passphrase</span>
                </h1>

                <ActionButton>Create your own</ActionButton>
            </section>

            <Parallax speed={15}>
                <img
                    // TODO: Remove Magic Number
                    src={"./images/qr-cards/collage.png"}
                    style={{ height: "450px" }}
                    alt={"qr-cards-collage"}
                />
            </Parallax>
        </section>
    )
}
