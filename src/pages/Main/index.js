import React from 'react';

import Home from '../../components/Home';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Portfolio from '../../components/Portfolio';
import PersonalSkills from '../../components/PersonalSkills';
import Recommendations from '../../components/Recommendations';
import Contact from '../../components/Contact';

const Main = () => {
    return (
        <>
            <Home />
            <main>
                <About />
                <Skills />
                <Experience type="work_experience" />
                <Experience type="education" />
                <Portfolio />
                <PersonalSkills />
                <Recommendations />
                <Contact />
            </main>
        </>
    )
}

export default Main;