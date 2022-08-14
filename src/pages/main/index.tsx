const MainPage = () => {
    return (
        <main className={"flex flex-col"}>
            <header className={"w-full absolute flex items-center h-32"}>
                <section className={"container mx-auto"}>
                    <h1
                        className={
                            "text-4xl font-semibold text-gray-800 flex items-center"
                        }>
                        phrase
                        <span className={"text-blue-600"}>qr</span>
                    </h1>
                </section>
            </header>

            <section
                className={
                    "container mx-auto h-screen flex items-center justify-center flex-col"
                }>
                <h1 className={"text-7xl text-center font-bold text-gray-800"}>
                    Generate QR Code <br /> For your crypto <br />
                    <span className={"text-blue-600"}>Passphrase</span>
                </h1>

                <button
                    className={
                        "px-12 py-3 rounded-xl transition-all hover:bg-blue-500 hover:text-white border-2 border-blue-500 mt-12"
                    }>
                    Get Started
                </button>
            </section>
        </main>
    )
}

export default MainPage
