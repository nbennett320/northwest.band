import React from 'react'
import Animated from './Animated'
import styles from './styles.module.scss'

interface Props {
  src: string
  frames: number
  duration?: string
  style?: React.CSSProperties
  className?: string
}

const AnimatedBackground = (props: React.PropsWithChildren<Props>) => {
  const [height, setHeight] = React.useState<number>()
  const [width, setWidth] = React.useState<number>()

  React.useEffect(() => {
    const img = new Image()
    img.src = props.src
    img.onload = () => {
      setHeight(img.height)
      setWidth(img.width)
    }
  }, [props.src])

  return (
    <div 
      className={`${styles.container} ${props?.className ?? ''}`}
      style={props.style}
    >
      <Animated
        src={props.src}
        frames={props.frames}
        duration={props.duration}
        height={height}
        width={width}
      >
        {props.children}
      </Animated>
    </div>
  )
}

export default AnimatedBackground
