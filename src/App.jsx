import SectionWrapper from './components/SectionWrapper/SectionWrapper'
import './App.scss'
import Header from './components/Header/Header'
import Typewriter from './components/Typewriter/Typewriter'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Projects from './components/Projects/Projects'

function App() {

  return (
    <>
      <Header />
      <SectionWrapper>
        <div id='home'>
          <Typewriter />
        </div>
      </SectionWrapper>
      <SectionWrapper>
        <div id='projects'>
          <Projects />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='about'>
          <About />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='skills'>
          <Skills />
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='contact'>
          <Contact />
        </div>
      </SectionWrapper>
      <Footer />
    </>
  )
}

export default App
