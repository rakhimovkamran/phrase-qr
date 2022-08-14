import { withProviders } from "./providers"
import { Routing } from "pages"
import "assets/css/index.css"

const App = () => {
    return (
        <main>
            <Routing />
        </main>
    )
}

export default withProviders(App)
