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
        rock, 
        songs,
        demos,
        live,
        songs,
        covers
      "
    />
    <link rel="canonical" href="http://northwest.band/music" />
    <meta name="author" content="Noah Bennett" />
    <meta name="description" content="
      Demos, live versions, and covers by Northwest.
    " />
    <meta name="robots" content="index" />
    <meta name="url" content="http://northwest.band/music" />
    <title> northwest the band | demos, live versions, and covers </title>
  </ReactHelmet>
)

export default Helmet