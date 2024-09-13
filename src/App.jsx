import Navbar from './components/Navbar/Navbar'
import SectionWrapper from './components/SectionWrapper/SectionWrapper'
import Title from './components/Title/Title'
import './App.scss'
import Header from './components/Header/Header'

function App() {

  return (
    <>
      <Header />
      <SectionWrapper>
        <div id='projects'>
          <Title>Projects</Title>

        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='about'>
          <Title>About</Title>

        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='skills'>
          <Title>Skills</Title>
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div id='contact'>
          <Title>Contact</Title>

        </div>
      </SectionWrapper>
    </>
  )
}

export default App
