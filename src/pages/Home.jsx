import { React } from 'react';
import Header from '../components/Header';
import Infos from '../components/Infos';
import About from '../components/About';
import Projects from '../components/Projects';
import Timeline from '../components/Timeline';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <main className="container max-w-full bg-indigo-100">
        <Infos />
        <About />
        <Projects />
        <Timeline />
      </main>
    </div>
  );
}
