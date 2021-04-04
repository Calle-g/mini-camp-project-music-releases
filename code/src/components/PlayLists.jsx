import React from 'react'
import { AlbumCover } from './AlbumCover';
import { IconContainer } from './IconContainer';

export const PlayLists = (props) => {
  return (
    <div className={`sidebar${props.hide ? ' hidden' : ''}`}>
      {props.playlists.map((item, index) => {
        return (
          <div key={index} className="album-cover-container">
            <AlbumCover images={item.images} />
            <IconContainer />
          </div>
        )
      })}
    </div>
  )
}
