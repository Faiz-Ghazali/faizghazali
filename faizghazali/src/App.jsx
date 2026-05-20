import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-blue-950 transition-colors duration-300">
          <Header />
          
          <main className="grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
