import { useTheme } from '../context/ThemeContext'

export default function Home() {
  const { isDark } = useTheme()

  const projects = [
    {
      id: 1,
      title: 'JetPedia',
      description: 'A Sleek and modern Application contain a collection about Fighting Jets, built with React and Tailwind CSS',
      image: 'https://images.unsplash.com/photo-1551501350-4891e8426e63?w=400&h=300&fit=crop',
      tags: ['React', 'Tailwind CSS'],
      github: '#',
      deployment: '#',
    },
    {
      id: 2,
      title: 'Eduverse',
      description: 'Online Learning Inspired by Ruangguru, SKillvul, and dicoding.com',
      image: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=400&h=300&fit=crop',
      tags: ['React', 'Redux'],
      github: '#',
      deployment: '#',
    },
    {
      id: 3,
      title: 'Project Three',
      description: 'Modern JavaScript with beautiful styling',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=300&fit=crop',
      tags: ['JavaScript', 'Tailwind CSS'],
      github: '#',
      deployment: '#',
    },
    {
      id: 4,
      title: 'Project Four',
      description: 'Fast and optimized web applications',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&h=300&fit=crop',
      tags: ['React', 'Vite'],
      github: '#',
      deployment: '#',
    },
    {
      id: 5,
      title: 'Project Five',
      description: 'API integration and data fetching',
      image: 'https://images.unsplash.com/photo-1563062928-fc0a16a5bac0?w=400&h=300&fit=crop',
      tags: ['React', 'API'],
      github: '#',
      deployment: '#',
    },
    {
      id: 6,
      title: 'Project Six',
      description: 'Responsive and accessible web design',
      image: 'https://images.unsplash.com/photo-1522869635100-ce306e08e5e4?w=400&h=300&fit=crop',
      tags: ['JavaScript', 'CSS'],
      github: '#',
      deployment: '#',
    },
  ]

  return (
    <div className={`${isDark ? 'bg-blue-950' : 'bg-white'} transition-colors duration-300`}>
      {/* Hero Section - Side by Side */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <p className={`text-lg font-semibold mb-4 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>
              Welcome to my portfolio
            </p>

            <h1 className={`text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 ${isDark ? 'text-white' : 'text-blue-950'}`}>
              Hello, I'm <span className={`${isDark ? 'text-blue-400' : 'text-blue-600'}`}>Faiz Ghazali</span>
            </h1>

            <p className={`text-2xl font-semibold mb-4 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Frontend Developer
            </p>

            <p className={`text-lg mb-6 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Network & Telecom Student
            </p>

            <p className={`text-lg leading-relaxed mb-10 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Transforming ideas into digital experiences. Passionate about building responsive and user-friendly web applications with modern technologies.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                className={`px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-105 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/50' : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg'}`}
              >
                View Projects
              </button>
              <button className={`px-8 py-4 font-semibold rounded-lg border-2 transition-all duration-200 ${isDark ? 'border-blue-400 text-blue-400 hover:bg-blue-400/10' : 'border-blue-600 text-blue-600 hover:bg-blue-50'}`}>
                Download CV
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center md:justify-end">
            <div className={`w-64 h-64 rounded-2xl flex items-center justify-center shadow-2xl transition-transform hover:scale-105 duration-300 ${isDark ? 'bg-blue-900 border-2 border-blue-700' : 'bg-gray-100 border-2 border-gray-300'}`}>
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Faiz" alt="Profile" className="w-full h-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-blue-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-blue-950'}`}>
            About <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Me</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* About Content */}
            <div>
              <p className={`mb-4 leading-relaxed text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                Hi! I'm a passionate frontend developer with a strong interest in building modern web applications. My journey in tech started with a curiosity about how websites work.
              </p>
              <p className={`mb-4 leading-relaxed text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                I specialize in creating responsive and interactive user interfaces using React, Tailwind CSS, and other modern technologies.
              </p>
              <p className={`leading-relaxed text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                When I'm not coding, you can find me exploring new technologies or working on personal projects.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className={`p-6 rounded-lg text-center border transition-colors duration-300 ${isDark ? 'bg-blue-800 border-blue-700' : 'bg-white border-gray-200'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>5</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Web Projects</p>
              </div>
              <div className={`p-6 rounded-lg text-center border transition-colors duration-300 ${isDark ? 'bg-blue-800 border-blue-700' : 'bg-white border-gray-200'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>2</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Certifications</p>
              </div>
              <div className={`p-6 rounded-lg text-center border transition-colors duration-300 ${isDark ? 'bg-blue-800 border-blue-700' : 'bg-white border-gray-200'}`}>
                <div className={`text-3xl font-bold mb-2 ${isDark ? 'text-blue-400' : 'text-blue-600'}`}>3+</div>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-blue-950' : 'bg-white'} transition-colors duration-300`}>
        <div className="max-w-4xl mx-auto">
          <h2 className={`text-4xl sm:text-5xl font-bold mb-12 text-center ${isDark ? 'text-white' : 'text-blue-950'}`}>
            My <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Skills</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {['React', 'JavaScript', 'Tailwind CSS', 'Redux', 'Vite', 'REST API'].map((skill) => (
              <div
                key={skill}
                className={`p-4 rounded-lg border transition-colors duration-300 hover:border-blue-400 ${isDark ? 'bg-blue-900 border-blue-700 hover:bg-blue-800' : 'bg-white border-gray-200 hover:bg-gray-50'}`}
              >
                <p className={`font-semibold text-lg ${isDark ? 'text-white' : 'text-blue-950'}`}>{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className={`py-16 sm:py-24 px-4 sm:px-6 lg:px-8 ${isDark ? 'bg-blue-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-center ${isDark ? 'text-white' : 'text-blue-950'}`}>
              Portfolio <span className={isDark ? 'text-blue-400' : 'text-blue-600'}>Showcase</span>
            </h2>
            <p className={`text-center text-lg max-w-3xl mx-auto ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Explore my latest projects showcasing my skills in frontend development, UI design, and modern web technologies.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`group h-full flex flex-col rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${isDark ? 'bg-blue-800 border-blue-700 hover:border-blue-500' : 'bg-white border-gray-200 hover:border-gray-400'}`}
              >
                {/* Project Image Placeholder */}
                <div className={`h-40 sm:h-48 flex items-center justify-center transition-colors duration-300 border-b overflow-hidden ${isDark ? 'bg-blue-700 border-blue-600 group-hover:bg-blue-600' : 'bg-gray-100 border-gray-200 group-hover:bg-gray-200'}`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-5 sm:p-6 flex-grow flex flex-col">
                  <h3 className={`text-lg sm:text-xl font-bold mb-2 transition-colors line-clamp-2 ${isDark ? 'text-white group-hover:text-blue-300' : 'text-blue-950 group-hover:text-blue-600'}`}>
                    {project.title}
                  </h3>
                  
                  <p className={`text-sm mb-4 flex-grow line-clamp-3 ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs px-3 py-1 rounded-full border transition-colors ${isDark ? 'bg-blue-700 text-blue-200 border-blue-600 hover:border-blue-500' : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-gray-400'}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className={`flex gap-3 mt-auto pt-4 border-t ${isDark ? 'border-blue-700' : 'border-gray-200'}`}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-sm ${isDark ? 'bg-blue-700 text-white hover:bg-blue-600' : 'bg-gray-200 text-gray-900 hover:bg-gray-300'}`}
                      title="View source code on GitHub"
                    >
                      <i className="fab fa-github text-lg"></i>
                      <span className="hidden sm:inline">GitHub</span>
                    </a>
                    <a
                      href={project.deployment}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 font-semibold rounded-lg transition-all duration-200 hover:shadow-lg text-sm ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500 hover:shadow-blue-600/50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                      title="Visit live deployment"
                    >
                      <i className="fas fa-external-link-alt"></i>
                      <span className="hidden sm:inline">Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 sm:mt-20 text-center">
            <p className={`mb-6 text-lg ${isDark ? 'text-gray-300' : 'text-gray-700'}`}>
              Want to see more? Check out my GitHub profile for additional projects.
            </p>
            <a
              href="https://github.com/Faiz-Ghazali"
              className={`inline-block px-8 py-3 font-semibold rounded-lg transition-all duration-200 hover:scale-105 ${isDark ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-lg shadow-blue-600/50' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
            >
              Visit GitHub Profile
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}