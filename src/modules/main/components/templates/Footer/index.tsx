export const Footer = () => {
    return (
        <footer
            className={
                "px-4 md:px-0 py-12 md:py-24 border-t container mx-auto flex items-center justify-between"
            }>
            <span>
                Developed with ❤️ by{" "}
                <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    className={"text-blue-500"}
                    href={"https://twitter.com/rakhimovkamran"}>
                    Kamran
                </a>
            </span>

            <span className={"text-gray-400"}>
                {new Date().getFullYear()} &copy;phraseqr
            </span>
        </footer>
    )
}
