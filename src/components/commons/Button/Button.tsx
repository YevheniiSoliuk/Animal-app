import React from "react";

type ButtonProps = {
  text: string,
  value: string,
  type?: "button" | "submit" | "reset" | undefined,
  styles: string,
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean,
}

const Button = ({text, type, value, styles, onClick, disabled}: ButtonProps) => {
  return (
    <>
      {disabled ? 
        <button type={type} className={styles} value={value} onClick={onClick} disabled>{text}</button> :
        <button type={type} className={styles} value={value} onClick={onClick}>{text}</button>
      }
    </>
  )
}

export default Button;