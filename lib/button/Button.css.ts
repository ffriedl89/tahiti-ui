import { style } from '@vanilla-extract/css';

export const button = style({
  all: 'unset',
  backgroundColor: '#95f9ff',
  padding: '0.5rem 1rem',
  borderRadius: '0.25rem',
  transition: 'box-shadow 300ms',
  cursor: 'pointer',
  ':hover': {
    boxShadow: '0px 10px 15px -3px rgba(0,0,0,0.1)',
  }
});