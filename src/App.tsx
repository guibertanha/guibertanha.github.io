import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import './index.css'

export default function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  )
}
