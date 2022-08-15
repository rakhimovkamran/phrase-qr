import { ChangeEvent, useCallback, useState, useRef } from "react"

import { Input, Logo } from "shared/components/atoms"
import { downloadHTMLElement } from "shared/utils"

import { QRCard, Setting } from "modules/generate/components/templates"
import { ThemeButton } from "modules/generate/components/atoms"
import { themes } from "modules/generate/constants"

const GeneratePage = () => {
    /**
     * @const {RefObject} QRCodeRef - Reference for QR Code
     * */
    const QRCodeRef = useRef<HTMLDivElement>(null)

    /**
     * @const {array} words - Words that will be used to create QR Code
     * @const {string} selectedTheme - Describes theme for QR Code / QR Card
     * @const {string} title - Title that will be used to create QR Card
     * */
    const [words, setWords] = useState<string[] | []>([])
    const [selectedTheme, setSelectedTheme] = useState("indigo")
    const [title, setTitle] = useState("")

    /**
     * Add an empty word to words array
     * @function
     * @returns {void}
     */
    const handleAddWord = () => {
        setWords((prev) => [...prev, ""])
    }

    /**
     * Updates word in state by index
     * @function
     * @param {number} idx
     * @param {string} value
     * @returns {void}
     */
    const handleWordEdit = (idx: number, value: string) => {
        const updatedWords = [...words]
        updatedWords[idx] = value

        setWords(updatedWords)
    }

    const handleQRDownload = useCallback(() => {
        if (QRCodeRef.current !== null) {
            downloadHTMLElement.toPNG(QRCodeRef.current, title)
        }
    }, [QRCodeRef])

    return (
        <main className={"flex h-screen w-full"}>
            <aside
                className={"w-80 overflow-scroll border-r p-8 flex flex-col"}>
                <Logo withAuthor={true} />

                <Setting className={"mt-12"} title={"Title"}>
                    <Input
                        onChange={(e: ChangeEvent<HTMLInputElement>) =>
                            setTitle(e.target.value)
                        }
                        placeholder={"E.g TON Wallet Phrases"}
                        maxLength={25}
                    />
                </Setting>

                <Setting className={"mt-6"} title={"Choose theme"}>
                    <section className={"flex gap-2"}>
                        {Object.keys(themes).map((theme, idx) => (
                            <ThemeButton
                                onClick={(theme) => setSelectedTheme(theme)}
                                selectedTheme={selectedTheme}
                                theme={theme}
                                key={idx}
                            />
                        ))}
                    </section>
                </Setting>

                <Setting className={"mt-6"} title={"Words"}>
                    {words.map((word, idx) => (
                        <Input
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                                handleWordEdit(idx, e.target.value)
                            }
                            maxLength={15}
                            key={idx}
                        />
                    ))}
                    <button
                        onClick={handleAddWord}
                        className={
                            "w-full h-12 bg-blue-500 rounded-lg text-white"
                        }>
                        Add Word
                    </button>
                </Setting>

                <Setting className={"mt-6"} title={"Download"}>
                    <section className={"grid grid-cols-2 mt-2 gap-2"}>
                        <button
                            className={
                                "bg-blue-500 py-4 text-white rounded-lg"
                            }>
                            SVG
                        </button>

                        <button
                            onClick={handleQRDownload}
                            className={
                                "bg-blue-500 py-4 text-white rounded-lg"
                            }>
                            PNG
                        </button>
                    </section>
                </Setting>
            </aside>

            <section
                className={
                    "flex-1 bg-slate-100 flex items-center justify-center flex-col"
                }>
                <QRCard
                    theme={selectedTheme}
                    ref={QRCodeRef}
                    words={words}
                    title={title}
                />
            </section>
        </main>
    )
}

export default GeneratePage
