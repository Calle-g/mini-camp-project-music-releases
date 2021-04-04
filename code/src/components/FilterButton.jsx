import React from 'react'

export const FilterButton = (props) => {
  const {
    value,
    title,
    onClickFunction,
    active
  } = props
  return (
    <div className={`filter-button${active ? ' active' : ''}`} role="button" tabIndex={0} onClick={() => onClickFunction(value)} onKeyDown={() => onClickFunction(value)}>
      {title}
    </div>
  )
}
