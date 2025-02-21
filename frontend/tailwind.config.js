module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          darkBg: '#1f2937',     // Dark Background
          cardBg: '#2d3748',     // Darker Card Background
          accent: '#0ea5e9',     // Teal Accent Color
          textMain: '#e2e8f0',   // Light Text
          textSecondary: '#94a3b8'  // Grayish Text
        },
        boxShadow: {
          card: '0 4px 12px rgba(0, 0, 0, 0.2)',
          button: '0 2px 4px rgba(0, 0, 0, 0.2)'
        }
      }
    },
    plugins: [],
  }
  