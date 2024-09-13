import SectionWrapper from './components/SectionWrapper/SectionWrapper'
import Title from './components/Title/Title'
import './App.scss'
import Header from './components/Header/Header'
import Typewriter from './components/Typewriter/Typewriter'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'

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
          <Title>Projects</Title>
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
