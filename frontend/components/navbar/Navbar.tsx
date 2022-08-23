import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useGlobalState } from '../../hooks/state'
import ShoppingBag from '../icons/ShoppingBag'
import HeaderLogo from '../../public/images/nwStarLogoBlack_407x128.png'
import styles from './styles.module.scss'

interface Props {
  href?: string
}

const Navbar = (props: Props) => {
  const state = useGlobalState()
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
            src={HeaderLogo}
            alt='northwest star logo'
            height={hover ? 58*1.05 : 58}
            width={hover ? 198*1.05 : 198}
            layout='intrinsic'
            priority
            className={styles.logo}
          />
        </a>
      </Link>

      {state && state.cartId && <div className={styles.cart}>
        <Link href={'/cart'}>
          <a>
            <ShoppingBag />
            <div className={styles.badge}>
              <span className='flex justify-center py-1 px-1 leading-none text-center whitespace-nowrap align-baseline font-bold bg-indigo-400 text-white rounded-full text-sm w-full h-full'>
                {state.cartTotalQuantity}
              </span>
            </div>
          </a>
        </Link>
      </div>}
    </nav>
  )
}

export default Navbar
