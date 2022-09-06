import React from 'react'
import Navbar from '../../../navbar/Navbar'
import Footer from '../../../footer/Footer'
import { SongData } from '../../../../lib/songs'
import { hasDarkTextOverImage } from '../../../../lib/image'
import BackgroundImage from './BackgroundImage'
import styles from './styles.module.scss'

interface Props {
  data: SongData
}

const Layout = (props: React.PropsWithChildren<Props>) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [darkText, setDarkText] = React.useState<boolean>()
  const [textBottom, setTextBottom] = React.useState<number>()
  const src = `/images/lyrics/${props.data?.id}.jpg`

  React.useEffect(() => {
    const img: HTMLImageElement = new Image()
    img.src = src
    img.onload = () => {
      setDarkText(hasDarkTextOverImage(img))
    }
  }, [src])

  React.useEffect(() => {
    if(containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const bottom = containerRect.bottom > window.innerHeight
        ? containerRect.bottom
        : window.innerHeight
      setTextBottom(bottom)
    }
  }, [containerRef])

  return (
    <div className={`${styles.container}`}>
      <main className={styles.main}>
        <Navbar href='/music' />

        <div 
          ref={containerRef}
          className={styles.grid}
          style={{
            color: darkText ? '#000' : '#fff'
          }}
        >
          {props.children}
        </div>

        <div className={styles.imgcontainer}>
          <BackgroundImage 
            src={src} 
            alt={`${props.data?.title} background image`} 
          />
        </div>
      </main>

      <Footer 
        className={styles.footer}
        style={{
          top: `${textBottom}px`
        }}
      />
    </div>
  )
}

export default Layout
