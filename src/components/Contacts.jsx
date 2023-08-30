import { React } from 'react';
import githubLogoDark from '../utils/icons/github-dark.png';
import githubLogoLight from '../utils/icons/github.png';
import whatsApp from '../utils/icons/whatsapp.png';
import linkedin from '../utils/icons/linkedin.png';

export default function Contacts() {
  return (
    <nav>
      <button type="button">
        <img src={githubLogoLight} alt="Github" />
      </button>
      <button type="button">
        <img src={githubLogoDark} alt="Github" />
      </button>
      <button type="button">
        <img src={whatsApp} alt="Github" />
      </button>
      <button type="button">
        <img src={linkedin} alt="Github" />
      </button>
    </nav>
  );
}
