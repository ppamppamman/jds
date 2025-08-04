import colorVariants from "./colors";

const typographyTokens = {
  fontSize: {
    t1: '11px',
    t2: '12px',
    t3: '13px',
    t4: '14px',
    t5: '16px',
    t6: '18px',
    t7: '20px',
    t8: '22px',
    t9: '24px',
    t10: '26px',
    // static variants (px 단위)
    't2-static': '12px',
    't5-static': '16px',
    't6-static': '18px',
  },
  lineHeight: {
    t1: '15px',
    t2: '16px',
    t3: '18px',
    t4: '19px',
    t5: '22px',
    t6: '24px',
    t7: '27px',
    t8: '30px',
    t9: '32px',
    t10: '35px',
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    bold: '700',
  },
  semantic: {
    screenTitle: {
      fontSize: 't10',
      lineHeight: 't10',
      fontWeight: 'bold',
    },
    articleBody: {
      fontSize: 't5',
      lineHeight: 't6',
      fontWeight: 'regular',
    },
  },
} as const;

const typographyVariants = {
  headline1: {
    normal: {
      fontSize: typographyTokens.fontSize.t10,
      lineHeight: typographyTokens.lineHeight.t10,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t10,
      lineHeight: typographyTokens.lineHeight.t10,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  headline2: {
    normal: {
      fontSize: typographyTokens.fontSize.t9,
      lineHeight: typographyTokens.lineHeight.t9,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t9,
      lineHeight: typographyTokens.lineHeight.t9,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  headline3: {
    normal: {
      fontSize: typographyTokens.fontSize.t8,
      lineHeight: typographyTokens.lineHeight.t8,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t8,
      lineHeight: typographyTokens.lineHeight.t8,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  body1: {
    normal: {
      fontSize: typographyTokens.fontSize.t5,
      lineHeight: typographyTokens.lineHeight.t6,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t5,
      lineHeight: typographyTokens.lineHeight.t6,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  body2: {
    normal: {
      fontSize: typographyTokens.fontSize.t4,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t4,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  caption1: {
    normal: {
      fontSize: typographyTokens.fontSize.t2,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t2,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
  caption2: {
    normal: {
      fontSize: typographyTokens.fontSize.t1,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.regular,
      color: colorVariants.semantic.text.primary,
    },
    bold: {
      fontSize: typographyTokens.fontSize.t1,
      lineHeight: typographyTokens.lineHeight.t4,
      fontWeight: typographyTokens.fontWeight.bold,
      color: colorVariants.semantic.text.primary,
    },
  },
} as const;

export default typographyVariants;