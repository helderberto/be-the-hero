import Color from './colors';
import * as Typography from './typography';
import * as Screen from './screen';

const main = {
  settings: {
    fontFamilyBase: Typography.families.base,
    fontSizeBase: Typography.sizes.base,
    fontWeightBase: Typography.weights.regular,
  },
  colors: Color,
  fontSizes: Typography.sizes,
  fontWeights: Typography.weights,
  breakpoints: Screen.breakpoints,
  maxWidths: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
  },
};

export { main };
