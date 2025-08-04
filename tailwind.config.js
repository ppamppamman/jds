import colorTokens from "./src/foundations/colors";

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: colorTokens,
    },
  },
};

export default config;