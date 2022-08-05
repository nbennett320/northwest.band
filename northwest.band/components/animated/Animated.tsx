import React from 'react'
import styled, { css, keyframes } from 'styled-components'

interface Props {
  src: string
  frames: number
  duration?: string
  height?: number
  width?: number
}

const frames = (props: Props) => keyframes`
    0% { background-position: 0px; }
    100% { background-position: ${props.width}px; }
  }
`

const animation = (props: Props) => css`${frames(props)}`

const Container = styled.div`
  background-image: url(${(props: Props) => props.src});
  height: ${(props: Props) => props.height}px;
  width: calc(${(props: Props) => props.width}px / ${(props: Props) => props.frames});
  background-size: auto;
  animation-duration: ${(props: Props) => props.duration ?? '1s'};
  animation-iteration-count: infinite;
  animation-timing-function: steps(${(props: Props) => props.frames});
  animation-name: ${(props: Props) => animation(props)};
  user-select: none;
  -webkit-touch-callout: none;
`

const Animated = (props: React.PropsWithChildren<Props>) => {
  return (
    <Container {...props}>
      {props.children}
    </Container>
  )
}

export default Animated
