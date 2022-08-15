import { Logo } from "shared/components/atoms"

export const Header = () => {
    return (
        <header className={"w-full absolute flex items-center h-32"}>
            <section className={"container mx-auto"}>
                <Logo />
            </section>
        </header>
    )
}
