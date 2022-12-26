import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

export interface ButtonProps {
    size?: 'small' | 'medium' | 'large'
}

export function Button(props : PropsWithChildren<ButtonProps> & ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button>{props.children}</button>
}
