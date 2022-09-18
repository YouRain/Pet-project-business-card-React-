import React, { useState } from 'react';
import AboutInfo from '../components/AboutInfo';
import Experience from '../components/Experience';
import MyHeaders from '../components/MyHeaders';
import MyIntro from '../components/MyIntro';
import Skills from '../components/Skills';
import Social from '../components/Social';
import Education from '../components/Education';
import Contact from '../components/Contact';
import "../styles/App.css";
import { PersonInfo, emptyPerson } from '../store/PersonInfo';
import Footer from '../components/Footer';
import Modal from '../components/Modal/Modal';

function MainPage() {
  const [idPerson, setIdPerson] = useState(0);
  const [visible, setVisible] = useState(false);
  const [persons, setPersons] = useState(PersonInfo);
  const [introElem, setIntroElem] = useState(null);
  const [newPerson, setNewPerson] = useState(emptyPerson)
  const [toggleBtn, setToggleBtn] = useState(true)

  return (
    <div>
      <Modal
        idPerson={idPerson}
        visible={visible}
        setVisible={setVisible}
        setPersons={setPersons}
        persons={persons}
        newPerson={newPerson}
        setNewPerson={setNewPerson}
        toggleBtn={toggleBtn}
      />
      <MyHeaders introElem={introElem} />
      <MyIntro
        setIntroElem={setIntroElem}
        person={persons[idPerson]}
        setPersons={setPersons}
        setIdPerson={setIdPerson}
        idPerson={idPerson}
        persons={persons}
        setVisible={setVisible}
        emptyPerson={emptyPerson}
        setNewPerson={setNewPerson}
        setToggleBtn={setToggleBtn}
      />
      <Social person={persons[idPerson]} />
      <AboutInfo person={persons[idPerson]} />
      {persons[idPerson].skills[0].soft &&
        <Skills person={persons[idPerson]} />
      }
      {persons[idPerson].experience[0].periodDate &&
        <Experience person={persons[idPerson]} />
      }
      {persons[idPerson].education[0].periodDate &&
        <Education person={persons[idPerson]} />
      }
      <Contact person={persons[idPerson]} idPerson={idPerson}/>
      <Footer person={persons[idPerson]} />
    </div>
  );
}

export default MainPage;
