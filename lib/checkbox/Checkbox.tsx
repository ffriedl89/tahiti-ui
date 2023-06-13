import { ReactNode } from "react"
import { srOnly } from "../styles/atoms.css";
import { checkboxLabel } from "./Checkbox.css";

type CheckboxProps = {
  children: ReactNode;
}

export const Checkbox = ({ children }: CheckboxProps) => {
  return (
    <label className={checkboxLabel}><input type="checkbox" className={srOnly}/>{ children}</label>
  )
}
