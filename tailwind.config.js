// Configuração do tema Tailwind CSS para Gaia Cogumelos
export const tailwindConfig = {
  theme: {
    extend: {
      colors: {
        brand: {
          forest: '#1B4332',   // verde profundo
          leaf: '#40916C',     // verde médio vibrante
          mint: '#95D5B2',     // verde claro fresco
          cream: '#F6F4EB',    // neutro claro
          stone: '#3D3D3D',    // cinza escuro profissional
        },
      },
      fontFamily: {
        sans: [
          'Inter var',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Ubuntu',
          'Cantarell',
          'Noto Sans',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        soft: '0 10px 20px rgba(0,0,0,0.06), 0 6px 6px rgba(0,0,0,0.08)',
      },
    },
  },
  future: { 
    hoverOnlyWhenSupported: true 
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  ...tailwindConfig,
  plugins: [],
}