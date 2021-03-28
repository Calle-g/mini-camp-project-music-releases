import React from 'react'
import { AlbumCards } from './components/AlbumCards'
import albums from './data.json'
import { keysToCamel } from './helpers/keysToCamel'

export const App = () => {
  return (
    <div id="main-container">
      <div id="main-title-container"><span className="main-title">New albums & singles</span></div>
      <AlbumCards albums={keysToCamel(albums.albums)} />
    </div>
  )
}
