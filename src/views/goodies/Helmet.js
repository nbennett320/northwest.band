import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet = () => (
  <ReactHelmet>
    <meta charset="utf-8" />
    <meta name="keywords" 
      content="
        northwest, 
        northwest the band, 
        northwest band,
        north west, 
        band, 
        nwi, 
        219, 
        the region, 
        northwest indiana, 
        goodies, 
        art
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest demo tracks, various works of art, and other goodies.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band/goodies" />
    <title> northwest the band | demos, artwork, and more </title>
  </ReactHelmet>
)

export default Helmet