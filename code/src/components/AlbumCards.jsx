import React from 'react'
import { AlbumCover } from './AlbumCover'
import { AlbumDescription } from './AlbumDescription'
import { IconContainer } from './IconContainer'

export const AlbumCards = (props) => {
  return (
    <div className="container">
      {props.albums.items.sort((a, b) => {
        return new Date(a.releaseDate) - new Date(b.releaseDate);
      }).map((item) => {
        return (
          <div className="album-card">
            <div className="album-cover-container">
              <AlbumCover images={item.images} height={640} />
              <IconContainer />
            </div>
            <AlbumDescription
              artists={item.artists}
              albumUrl={item.externalUrls.spotify}
              albumTitle={item.name} />
          </div>
        )
      })}
    </div>
  )
}
