import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'card-gradient': "url('/home/gradient.png')",
      },
      colors: {
        'neutral-4': '#EBEBEF',
        'neutral-12': '#1F2327',
        'neutral-11': '#60646C',
        'neutral-7': '#D3D4DB',
        'neutral-3': '#F2F2F5',
        'panel-1': '#fff',
        'panel-3': '#F9F9FB',
        'white-text': '#EEF0F1',
        'btn-border': 'rgba(1, 1, 46, 13.4%)',
        'bg-alpha-3': 'rgba(0, 0, 59, 5.1%)',
        'alpha-10': 'rgba(230, 244, 254, 40%)',
      },
    },
  },
  plugins: [],
};
export default config;
