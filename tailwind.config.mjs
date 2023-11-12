/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        custom: {
          background: '#141414',
          text: '#cfcfcf',
        },
      },
      maxWidth: {
        '8xl': '90rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*': {
              color: theme('colors.custom.text'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
