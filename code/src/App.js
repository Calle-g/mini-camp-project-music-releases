import React, { useState } from 'react'
import { Albums } from './components/Albums'
import { Header } from './components/Header'
import { albums } from './data.json'
import { playlists } from './stretch-goal.json'
import { keysToCamel } from './helpers/keysToCamel'
import { PlayLists } from './components/PlayLists'

export const App = () => {
  const [showPlayList, setShowPlayList] = useState(false);
  const [filter, setFilter] = useState(['all']);
  return (
    <div className={`main-container${showPlayList ? ' play-list-visible' : ''}`}>
      <Header
        showPlayList={showPlayList}
        setShowPlayList={setShowPlayList}
        filter={filter}
        setFilter={setFilter} />
      <div className="flex-wrapper">
        <Albums
          filter={filter}
          playListState={{ showPlayList, setShowPlayList }}
          albumList={keysToCamel(albums).items} />
        <div className={`sidebar-wrapper${showPlayList ? ' visible' : ''}`}>
          {showPlayList && <PlayLists playlists={keysToCamel(playlists).items} />}
        </div>
      </div>
    </div>
  )
}
