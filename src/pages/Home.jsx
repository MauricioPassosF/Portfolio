import { React } from 'react';
import Header from '../components/Header';
import Infos from '../components/Infos';
import About from '../components/About';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Infos />
        <About />
        <Projects />
        <Timeline />
      </main>
    </>
  );
}
