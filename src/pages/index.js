import Header from '../components/Header.js'
import dynamic from 'next/dynamic'

const About = dynamic(() => import('../sections/about.js'));
const Projects = dynamic(() => import('../sections/projects.js'));
const Contact = dynamic(() => import('../sections/contact.js'));

export default function Home() {
  return (
    <div>
      <Header />
      <main>

        <About />

        <Projects />

        <Contact /> 
      </main>
    </div>
  );
}