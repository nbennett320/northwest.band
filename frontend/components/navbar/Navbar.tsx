import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

interface Props {
  href?: string
}

const Navbar = (props: Props) => {
  const [hover, setHover] = React.useState<boolean>(false)
  
  return (
    <nav className={styles.navbar}>
      <Link href={props?.href ?? '/'}>
        <a 
          className={styles.link}
          onMouseOver={() => { setHover(true) }}
          onMouseLeave={() => { setHover(false) }}
        >
          <Image
            src={'/images/nwStarLogoBlack_407x128.png'}
            alt='northwest star logo'
            height={hover ? 64*1.05 : 64}
            width={hover ? 204*1.05 : 204}
            layout='intrinsic'
            className={styles.logo}
          />
        </a>
      </Link>
    </nav>
  )
}

export default Navbar
