import './styles/tokens.css';
import './styles/reset.css';
import './styles/global.css';

import { Nav } from './components/layout/Nav';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Now } from './components/sections/Now';
import { Experience } from './components/sections/Experience';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Resume } from './components/sections/Resume';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="app">
      <Nav />
      <main>
        <Hero />
        <Now />
        <Experience />
        <Projects />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
