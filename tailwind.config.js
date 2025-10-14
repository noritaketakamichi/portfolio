/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#1e40af',
        'secondary-blue': '#3b82f6',
        'light-blue': '#eff6ff',
      },
      fontFamily: {
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
      },
    },
  },
  plugins: [],
}