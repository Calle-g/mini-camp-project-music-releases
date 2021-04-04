import React from 'react'
import { AlbumCards } from './AlbumCards'

export const Albums = (props) => {
  return (
    <div className="album-wrapper">
      <AlbumCards
        albums={props.filter.length === 1 && props.filter[0] === 'all' ? props.albumList : props.albumList.filter((album) => {
          return props.filter.includes(album.albumType);
        })} />
    </div>
  )
}
