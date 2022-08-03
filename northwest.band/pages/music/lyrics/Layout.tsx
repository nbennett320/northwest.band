import React from 'react'
import NextImage from 'next/image'
import Navbar from '../../../components/navbar/Navbar'
import Footer from '../../../components/footer/Footer'
import { SongData } from '../../../lib/songs'
import { useDarkTextOverImage } from '../../../lib/image'
import styles from './styles.module.scss'

interface Props {
  data: SongData
}

const Layout = (props: React.PropsWithChildren<Props>) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const [height, setHeight] = React.useState<number>()
  const [width, setWidth] = React.useState<number>()
  const [darkText, setDarkText] = React.useState<boolean>()
  const src = `/images/lyrics/${props.data.id}.jpg`
  console.log('src: ', src)

  React.useEffect(() => {
  }, [props.data.id])

  React.useEffect(() => {
    if(ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const img: HTMLImageElement = new Image()
      img.src = src
      img.onload = () => {
        const ratio = img.width / rect.width
        setHeight(rect.height / ratio)
        setWidth(rect.width)
        setDarkText(useDarkTextOverImage(img))
        console.log("height, width: ", height, width, ratio, darkText)
      }
    }
  }, [ref.current, props.data.id])

  return (
    <div 
      ref={ref}
      className={`${styles.container}`}
    >
      <main className={styles.main}>
        <Navbar href='/music' />

        <div 
          className={styles.grid}
          style={{
            color: darkText ? '#000' : '#fff'
          }}
        >
          {props.children}
        </div>

        {ref.current && <div className={styles.imgcontainer}>
          <NextImage 
            src={src}
            layout='fill'
            className={styles.bgimage}
            priority
          />
        </div>}
      </main>

      {/* <Footer /> */}
    </div>
  )
}

export default Layout
