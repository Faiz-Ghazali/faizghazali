import { NavLink } from 'react-router'
import { useTheme } from '../context/ThemeContext'

export default function Header() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-blue-900 border-b border-gray-200 dark:border-gray-700 transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <NavLink
            to="/"
            className="text-2xl font-bold text-blue-600 dark:text-blue-400"
          >
            Faiz.dev
          </NavLink>
          <div className="flex gap-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              Home
            </NavLink>
            
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-300 border-b-2 border-blue-600 dark:border-blue-300'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`
              }
            >
              Projects
            </NavLink>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-blue-800 hover:bg-gray-200 dark:hover:bg-blue-700 transition-colors duration-300"
              title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <span className="text-xl">☀️</span>
              ) : (
                <span className="text-xl">🌙</span>
              )}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
