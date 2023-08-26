import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      maxWidth: {
        app: '700px', // Evitando o uso de valores arbitrários w-[valor-arbitrário]
      },
      colors: {
        gustavo: '#8257e6',
      },
    },
  },
  plugins: [],
}
export default config
