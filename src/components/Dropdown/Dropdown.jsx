import PropTypes from 'prop-types'
import React from 'react'
import './Dropdown.scss'

export default function Dropdown({ textLabel, name, data, selectedValue, handleChange }) {
  if (!data[0]) {
    return ''
  }
  return (
    <div className="select-wrapper">
      <label htmlFor={name}>{textLabel}</label>
      <select className={name} id={name} name={name} value={selectedValue} onChange={handleChange}>
        {data.map((val) => (
          <option value={val.rate} key={val.name}>
            {val.name}
          </option>
        ))}
      </select>
    </div>
  )
}

Dropdown.propTypes = {
  textLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  selectedValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}
