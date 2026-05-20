import { useTheme } from '../context/ThemeContext'

export default function Footer() {
  const { isDark } = useTheme()

  const socialLinks = [
    { name: 'GitHub', icon: 'fab fa-github', url: '#' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin', url: '#' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
  ]

  return (
    <footer className={`${isDark ? 'bg-blue-900 border-t border-blue-800' : 'bg-gray-50 border-t border-gray-200'} py-12 transition-colors duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6">
          {/* Social Media Icons */}
          <div className="flex gap-6 items-center justify-center">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                title={link.name}
                className={`text-2xl hover:scale-125 transition-transform duration-200 ${isDark ? 'text-gray-300 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'}`}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Faiz Ghazali. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
