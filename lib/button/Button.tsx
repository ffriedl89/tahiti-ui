import { ReactNode } from 'react'
import { button } from './Button.css';

type ButtonProps = {
  children: ReactNode;
}

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className={button}>🏝️&nbsp;{children}</button>
  )
}
