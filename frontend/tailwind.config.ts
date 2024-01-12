import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-green': '#9ca277',
        'dark-green': "#283618",
        'light-yellow': '#fefae0',
        'white-yellow': '#d7d7b6',
        'brick-gray': '#939878'
      },

    },
  },
  plugins: [],
}
export default config
