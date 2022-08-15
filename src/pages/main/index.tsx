import { cards } from "modules/main/constants"

import {
    ParallaxCaption,
    GetStarted,
    Cards,
    Footer,
    Header,
    Intro
} from "modules/main/components/templates"

const MainPage = () => {
    return (
        <main className={"flex flex-col"}>
            <Header />
            <Intro />

            <ParallaxCaption speed={10} className={"bg-blue-500"}>
                <h2 className={"text-7xl text-white font-bold"}>
                    Don&apos;t write your{" "}
                    <span className={"text-dark-800"}>passphrase</span> on a
                    piece of paper
                </h2>
            </ParallaxCaption>

            <Cards cards={cards} />

            <ParallaxCaption speed={10} className={"bg-yellow-300"}>
                <h2 className={"text-7xl font-bold leading-tight"}>
                    Don&apos;t worry, entire app is secured, we don&apos;t need
                    your money, and we&apos;re not providing any info to others.
                </h2>
            </ParallaxCaption>

            <GetStarted />

            <Footer />
        </main>
    )
}

export default MainPage
