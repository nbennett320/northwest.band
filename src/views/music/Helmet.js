import React from 'react'
import { Helmet } from 'react-helmet'

export const MusicHelmet = () => <Helmet>
  <meta charset="utf-8" />
  <meta name="keywords" 
    content="
      northwest, 
      northwest the band, 
      northwest band,
      music, 
      band, 
      lyrics,
      songs, 
      artwork,
      album
    "
  />
  <link rel="canonical" href="http://northwest.band/music" />
  <meta name="author" content="Noah Bennett" />
  <meta name="description" content="
    A list of Northwest's entire discography and respective lyrics.
  " />
  <meta name="robots" content="index" />
  <meta name="url" content="http://northwest.band/music" />
  <title>northwest the band | music, lyrics, and artwork</title>
</Helmet>

export const LyricsHelmet = props => (
  <Helmet>
    <meta charset="utf-8" />
    <meta name="keywords" 
      content="
        northwest, 
        northwest the band, 
        northwest band,
        music, 
        band, 
        lyrics,
        songs,
        artwork,
        album
      "
    />
    <link rel="canonical" href="http://northwest.band/music" />
    <meta name="author" content="Noah Bennett" />
    <meta name="robots" content="index" />
    <meta name="url" content={`http://northwest.band/songs/${props.songKey}`} />
    <title>northwest the band | {Object.keys(props.song).length > 0 ? props.song.title.toLowerCase() : ''} lyrics </title>
    <meta name="description" content={`
      Lyrics for "${props.song.title}" by Northwest.
    `} />
  </Helmet>
)