import React from 'react'
import { Helmet as ReactHelmet } from 'react-helmet'

const Helmet = info => (
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
    <meta name="description" content={`
      A ${info.color} ${info.description}.
    `} />
    <meta name="robots" content="index" />
    <meta name="url" content={`http://northwest.band/products/${info.model}`} />
    <title> northwest the band | {`${String(info.title)}`} </title>
  </ReactHelmet>
)

export default Helmet