import React from 'react'

enum Elements {
  Button = 'button',
  A = 'a',
  Div = 'div',
  Span = 'span',
}

type Element = 'button' | 'a' | 'div' | 'span'

interface Props 
extends React.DOMAttributes<HTMLButtonElement & HTMLAnchorElement & HTMLDivElement & HTMLSpanElement> {
  className?: string,
  style?: React.CSSProperties,
  disabled?: boolean,
  element?: Element,
  href?: string,
}

const ButtonBase = (props: React.PropsWithChildren<Props>) => {
  switch(props.element) {
    case Elements.Button:
      return (
        <button {...props}>
          {props.children}
        </button>
      )
    case Elements.A:
      return (
        <a 
          {...props}
          href={props.href}
        >
          {props.children}
        </a>
      )
    case Elements.Div:
      return (
        <div {...props}>
          {props.children}
        </div>
      )
    case Elements.Span:
      return (
        <span {...props}>
          {props.children}
        </span>
      )
    default:
      return (
        <button {...props}>
          {props.children}
        </button>
      )
  }
}

const Button = (props: React.PropsWithChildren<Props>) => (
  <ButtonBase
    {...props}
    className={`inline-block w-48 px-6 py-2.5 border border-gray-300 shadow-sm text-gray-700 text-xs font-bold leading-tight rounded hover:bg-gray-50 hover:shadow-lg focus:ring-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:shadow-md active:bg-gray-200 active:shadow-md transition duration-150 ease-in-out ${props.disabled ? 'pointer-events-none opacity-60 cursor-not-allowed shadow-none' : ''} ${props.className ?? ''}`}
    style={props.style}
    disabled={props.disabled ?? false}
  >
    {props.children}
  </ButtonBase>
)

export default Button
