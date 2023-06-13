import { style } from '@vanilla-extract/css';

export const srOnly = style({
  position: 'absolute',
  clip: 'rect(1px, 1px, 1px, 1px)',
  padding: 0,
  border: 0,
  height: '1px',
  width: '1px',
  overflow: 'hidden'
});