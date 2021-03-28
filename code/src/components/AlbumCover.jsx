import React from 'react'

export const AlbumCover = (props) => {
  const image = props.images?.find(
    (item) => item?.height === props.height
  )
  return (
    <div className="album-cover-wrapper">
      <img src={image.url} className="album-cover" alt="Album cover" />
    </div>
  )
}
