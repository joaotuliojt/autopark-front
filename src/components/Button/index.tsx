import { ButtonHTMLAttributes } from 'react'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ ...props }: ButtonProps) {
  return (
    <button
      className="bg-indigo-700 border text-white rounded-md border-indigo-500 h-9 px-4 hover:bg-indigo-800 transition-all active:bg-indigo-900"
      {...props}
    ></button>
  )
}
