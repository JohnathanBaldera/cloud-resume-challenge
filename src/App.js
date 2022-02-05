import './App.css';
import Education from './components/Education';
import Experience from './components/Experience';
import Header from './components/Header';
import Skills from './components/Skills';
import Certifications from './components/Certifications';

function App() {
  return (
    <div className='App'>
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Certifications />
    </div>
  );
}

export default App;
