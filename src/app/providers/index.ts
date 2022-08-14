import compose from "compose-function"

/* Put providers here */
import { withRouter } from "./withRouter"

export const withProviders = compose(withRouter)
