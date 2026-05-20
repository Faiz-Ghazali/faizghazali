export default function Projects() {
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
    <div className="min-h-screen bg-blue-950 dark:bg-blue-950 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 text-center">
            Portfolio <span className="text-blue-400">Showcase</span>
          </h1>
          <p className="text-gray-300 text-center text-lg max-w-3xl mx-auto">
            Explore my latest projects showcasing my skills in frontend development, UI design, and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group h-full flex flex-col bg-blue-900 rounded-xl overflow-hidden border border-blue-700 hover:border-blue-500 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/20 hover:-translate-y-1"
            >
              {/* Project Image Placeholder */}
              <div className="h-40 sm:h-48 bg-blue-800 flex items-center justify-center group-hover:bg-blue-700 transition-colors duration-300 border-b border-blue-700 overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Project Content */}
              <div className="p-5 sm:p-6 grow flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 grow line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-blue-700 text-blue-200 rounded-full border border-blue-600 hover:border-blue-500 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto pt-4 border-t border-blue-700">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-200 hover:shadow-lg text-sm group/btn"
                    title="View source code on GitHub"
                  >
                    <span>🐙</span>
                    <span className="hidden sm:inline">GitHub</span>
                  </a>
                  <a
                    href={project.deployment}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 hover:shadow-lg hover:shadow-blue-600/50 text-sm group/btn"
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
          <p className="text-gray-300 mb-6">
            Want to see more? Check out my GitHub profile for additional projects.
          </p>
          <a
            href="https://github.com/Faiz-Ghazali"
            className="inline-block px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all duration-200 hover:scale-105 shadow-lg shadow-blue-600/50"
          >
            Visit GitHub Profile
          </a>
        </div>
      </div>
    </div>
  )
}
