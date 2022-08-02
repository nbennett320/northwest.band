import React from 'react'
import Image from 'next/image'
import styles from './styles.module.scss'

interface Props {
  href?: string
}

const Navbar = (props: Props) => {
  const [hover, setHover] = React.useState<boolean>(false)
  
  return (
    <nav className={styles.navbar}>
      <a 
        className={styles.link}
        href={props.href}
        onMouseOver={() => { setHover(true) }}
        onMouseLeave={() => { setHover(false) }}
      >
        <Image
          src={'/images/nwStarLogoBlack_407x128.png'}
          alt='northwest star logo'
          height={hover ? 64*1.05 : 64}
          width={hover ? 204*1.05 : 204}
          layout='intrinsic'
        />
      </a>
    </nav>
  )
}

export default Navbar
