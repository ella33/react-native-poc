import { APP_FONT_FAMILY } from '@app/Constants';
import { white } from '@styles/colors';

export default {
  style: {
    fontFamily: APP_FONT_FAMILY.regular,
    color: white,
  },
  h1Style: {
    fontWeight: 'normal' as 'normal',
    fontFamily: APP_FONT_FAMILY.semiBold,
    marginVertical: 15,
  },
  h4Style: {
    fontWeight: 'normal' as 'normal',
    fontFamily: APP_FONT_FAMILY.medium,
    marginVertical: 15,
  },
};
