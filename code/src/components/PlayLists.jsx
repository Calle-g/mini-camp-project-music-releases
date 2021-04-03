import React from 'react'
import { AlbumCover } from './AlbumCover';
import { IconContainer } from './IconContainer';

export const PlayLists = (props) => {
  return (
    <div className="sidebar">
      {props.playlists.items.map((item, index) => {
        return (
          <div className="album-cover-container">
            <AlbumCover key={index} images={item.images} />
            <IconContainer />
          </div>
        )
      })}
    </div>
  )
}
