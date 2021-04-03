import React from 'react'
import { AlbumCards } from './components/AlbumCards'
import { PlayLists } from './components/PlayLists'
import { albums } from './data.json'
import { playlists } from './stretch-goal.json'
import { keysToCamel } from './helpers/keysToCamel'

export const App = () => {
  console.log(playlists)
  return (
    <div id="main-container">
      <div className="flex-wrapper">
        <div className="album-wrapper">
          <div className="header"><span className="main-title">New albums & singles</span></div>
          <AlbumCards albums={keysToCamel(albums)} />
        </div>
        <div className="sidebar-wrapper">
          <div className="header"><span className="main-title">Playlists</span></div>
          <PlayLists playlists={keysToCamel(playlists)} />
        </div>
      </div>
    </div>
  )
}
