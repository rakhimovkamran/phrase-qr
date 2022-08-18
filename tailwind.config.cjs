/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            width: {
                "500p": "500px"
            },
            height: {
                "450p": "450px",
                "350p": "350px"
            }
        }
    },

    plugins: []
}
