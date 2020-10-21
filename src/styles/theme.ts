import * as colors from './colors';
import { APP_FONT_FAMILY } from '@app/Constants';

const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary,
    white: colors.white,
    black: colors.black,
    grey0: colors.grey0,
  },
  Divider: {
    marginVertical: 20,
  },
  Text: {
    style: {
      fontFamily: APP_FONT_FAMILY.regular,
      color: colors.white,
    },
    h1Style: {
      fontWeight: 'normal',
      fontFamily: APP_FONT_FAMILY.semiBold,
      marginVertical: 15,
    },
    h4Style: {
      fontWeight: 'normal',
      fontFamily: APP_FONT_FAMILY.medium,
      marginVertical: 15,
    },
  },
};

export default theme;
