import designTokens from "./src/foundations/design-tokens";

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: designTokens,
    },
  },
};

export default config;