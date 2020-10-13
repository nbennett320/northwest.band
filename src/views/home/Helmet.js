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
        chicago, 
        rock and roll
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest is a rock and roll band from Northwest Indiana, started before the summer of 2017.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band" />
    <title>northwest the band | music, merch, and cool stuff</title>
  </ReactHelmet>
)

export default Helmet