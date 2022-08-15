import compose from "compose-function"

/* Put providers here */
import { withParallax } from "./withParallax"
import { withRouter } from "./withRouter"

export const withProviders = compose(withRouter, withParallax)
