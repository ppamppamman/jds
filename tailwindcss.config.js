import designTokens from "@/foundations/design-tokens";

const config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: designTokens,
    },
  },
};

export default config;