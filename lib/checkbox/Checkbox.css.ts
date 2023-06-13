import { style } from '@vanilla-extract/css';

export const checkbox = style({
  
});

export const checkboxLabel = style({
  display: 'flex',
  gap: '0.5rem',
  alignItems: 'center',
  ':before': {
    display: 'contents',
    width: '24px',
    height: '24px',
    borderRadius: '4px',
    border: '1px solid #95f9ff'
  }
})
