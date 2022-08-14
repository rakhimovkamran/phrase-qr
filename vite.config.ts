import { defineConfig } from "vite"

import react from "@vitejs/plugin-react"
import TSConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
	plugins: [react(), TSConfigPaths()]
})
