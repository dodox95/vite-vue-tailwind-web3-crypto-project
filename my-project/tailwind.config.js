// tailwind.config.js
export default {
  content: [
    './src/**/*.{vue,js,ts,jsx,tsx,html,css}', // dostosuj to do typów plików, które używasz
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
