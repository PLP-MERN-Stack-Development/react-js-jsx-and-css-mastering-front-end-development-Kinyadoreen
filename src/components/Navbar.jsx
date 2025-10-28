import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import Button from './Button'

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold">PLP Task Manager</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" onClick={toggleTheme}>
            {theme === 'dark' ? 'Light' : 'Dark'}
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
