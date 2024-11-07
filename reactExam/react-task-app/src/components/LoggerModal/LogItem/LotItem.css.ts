import { style } from '@vanilla-extract/css';
import { vars } from '../../../app.module.css';

export const logItemWrap = style({
  display: 'flex',
  flexDirection: 'column',
  alignSelf: 'flex-start',
  padding: vars.spacing.medium,
  marginBottom: vars.spacing.big2,
  width: '100%',
  borderBottom: 'solid 1px rgb(191, 197,217,0.3)',
  ':hover': {
    backgroundColor: vars.color.mainFadedBright,
    borderRadius: 10,
  },
});
export const message = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: vars.color.brightText,
  fontWeight: 'bold',
  fontSize: vars.fontSize.T4,
  marginBottom: vars.spacing.small,
});
export const author = style({
  display: 'flex',
  alignItems: 'center',
  columnGap: 10,
  color: vars.color.brightText,
  fontSize: vars.fontSize.T3,
  fontWeight: 'bold',
  marginBottom: vars.spacing.medium,
});
export const date = style({
  fontSize: vars.fontSize.T4,
  fontWeight: 'bold',
});
