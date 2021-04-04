import React from 'react'
import { FilterButton } from './FilterButton'

export const Header = (props) => {
  const changeFilter = (value) => {
    const valueIndex = props.filter.indexOf(value);
    let list;
    if (valueIndex > -1) {
      const newList = props.filter;
      newList.splice(valueIndex, 1);
      list = [
        ...newList
      ];
    } else {
      list = [
        ...props.filter,
        value
      ]
    }
    props.setFilter(list);
  }
  const togglePlayList = () => {
    props.setShowPlayList(!props.showPlayList);
  }
  return (
    <div className="header">
      <span className="main-title">New albums & singles</span>
      <div className="filter-button-wrapper">
        <FilterButton onClickFunction={changeFilter} active={props.filter.includes('album')} value="album" title="Filter albums" />
        <FilterButton onClickFunction={changeFilter} active={props.filter.includes('single')} value="single" title="Filter singles" />
        <FilterButton onClickFunction={togglePlayList} title={!props.showPlayList ? 'Show playlists' : 'Hide playlists'} />
      </div>
    </div>
  )
}
