import React from 'react'

export const AlbumCover = (props) => {
  const image = props.height ? props.images?.find(
    (item) => item?.height === props.height
  ) : props.images[0]
  return (
    <div className="album-cover-wrapper">
      <img src={image.url} className="album-cover" alt="Album cover" />
    </div>
  )
}
