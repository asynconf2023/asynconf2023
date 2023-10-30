import React from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

/**
 * Layout used to wrap the main part of the application
 * @param {string} className - classname given to the layout
 * @param {object} children - Corresponds to the content inside the layout
 * @returns {JSX.Element} - Return the layout
 */
export default function Layout({ children, className }) {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <main className={className}>{children}</main>
}

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
