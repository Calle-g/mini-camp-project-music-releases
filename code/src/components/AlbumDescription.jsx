import React from 'react'

export const AlbumDescription = (props) => {
  const {
    artists,
    albumUrl,
    albumTitle
  } = props
  const renderArtists = artists.map(({ name, externalUrls }, index) => {
    return (
      <><a key={index} href={externalUrls.spotify} target="_blank" rel="noreferrer">{name}</a>{props.artists.length - 1 > index && ' , '}</>
    )
  })

  return (
    <div className="description">
      <span className="title"><a href={albumUrl} target="_blank" rel="noreferrer">{albumTitle}</a></span>
      <span className="artists">{renderArtists}</span>
    </div>
  )
}
