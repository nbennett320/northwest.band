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
        music, 
        band, 
        merch, 
        merchandise, 
        clothing, 
        screen print, 
        band tees, 
      "
    />
    <link rel="canonical" href="http://northwest.band" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Northwest shirts, hoodies, physical music and more.
    " />
    <meta name="robots" content="noindex" />
    <meta name="url" content="http://northwest.band/merch" />
    <title>northwest the band | cart</title>
  </ReactHelmet>
)

export default Helmet