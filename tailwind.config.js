/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-green-5": "rgba(39, 174, 96, 0.05)",
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".scrollbar-thin": {
          /* Custom scrollbar styles */
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#3b82f6", // Tailwind blue-500
            borderRadius: "9999px",
          },
          "&::-webkit-scrollbar-track": {
            backgroundColor: "#e5e7eb", // Tailwind gray-200
          },
          "&::-webkit-scrollbar-button": {
            display: "none", // Hide the arrows
          },
        },
      });
    },
  ],
};
