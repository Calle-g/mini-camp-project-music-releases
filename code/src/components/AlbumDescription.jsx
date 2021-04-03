import React from 'react'

export const AlbumDescription = (props) => {
  const {
    artists,
    albumUrl,
    albumTitle
  } = props
  const renderArtists = artists.map(({ name, externalUrls }, index) => {
    const delimiter = index + 2 === artists.length ? ' & ' : ' , '
    return (
      <span key={index}><a href={externalUrls.spotify} target="_blank" rel="noreferrer">{name}</a>{props.artists.length - 1 > index && delimiter}</span>
    )
  })

  return (
    <div className="description">
      <span className="title"><a href={albumUrl} target="_blank" rel="noreferrer">{albumTitle}</a></span>
      <span className="artists">{renderArtists}{renderArtists.length > 1 && ` (${renderArtists.length})`}</span>
    </div>
  )
}
