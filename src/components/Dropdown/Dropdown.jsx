import PropTypes from 'prop-types'
import React from 'react'
import './Dropdown.scss'

/**
 * Select element
 * @param {*} textLabel - Label for the selection field
 * @param {*} name - Name of the selection field
 * @param {*} data - Array of data for the selection field options
 * @param {*} selectedValue - Selected value of the selection field
 * @param {*} handleChange - Callback function to update state on change
 * @returns {JSX.Element} - Return a select element within a select-wrapper container
 */
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
