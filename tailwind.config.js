import colorVariants from "./src/foundations/colors";
import typographyVariants from "./src/foundations/typography";

const typographyPlugin = ({ addComponents }) => {
  const typographyUtilities = {};
  
  Object.entries(typographyVariants).forEach(([styleName, variants]) => {
    Object.entries(variants).forEach(([variantName, styles]) => {
      const className = variantName === 'normal' 
        ? `.typography-${styleName}` 
        : `.typography-${styleName}-${variantName}`;
      
      typographyUtilities[className] = {
        fontSize: styles.fontSize,
        lineHeight: styles.lineHeight,
        fontWeight: styles.fontWeight,
        color: styles.color,
      };
    });
  });

  addComponents(typographyUtilities);
}

const config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: colorVariants,
    },
  },
  plugins: [ typographyPlugin, ],
};

export default config;