import { React, useState } from 'react';
import Contacts from './Contacts';

export default function Header() {
  const [showContacts, setShowContacts] = useState(false);

  return (
    <nav>
      <button type="button">Sobre Mim</button>
      <button type="button">Projetos</button>
      <button type="button">Codigo Fonte</button>
      <button type="button">Projetos</button>
      <button type="button">Curriculo</button>
      <button onClick={() => setShowContacts(!showContacts)} type="button">
        Contatos
      </button>
      {showContacts && <Contacts />}
      <button type="button">Darkmode</button>
    </nav>
  );
}
