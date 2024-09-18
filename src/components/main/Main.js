import React, { useState } from 'react';
import  './Main.css'
import About from '../../pages/About/About';
import Resume from '../../pages/Resume/Resume';
import Port from '../../pages/Portfolio/Port';
import Contact from '../../pages/Contact/Contact';


function Main(){

    const [activeComponent, setActiveComponent] = useState('about');

    const handleSetActiveComponent = (component)=>{
        setActiveComponent(component)
    };
    return(
            <div className='main-content'>
                <nav className='navbar'>
                    <ul className='navbar-list'>
                        <li className='navbar-item'>
                            <button className={`navbar-link ${activeComponent ==='about' ? 'active': ''}`} onClick={()=> handleSetActiveComponent('about')}>About</button>
                        </li>
                        <li className='navbar-item'>
                            <button className={`navbar-link ${activeComponent ==='resume' ? 'active': ''}`} onClick={()=> handleSetActiveComponent('resume')}>Resume</button>
                        </li>
                        <li className='navbar-item'>
                            <button className={`navbar-link ${activeComponent ==='portfolio' ? 'active': ''}`} onClick={()=> handleSetActiveComponent('portfolio')}>Portfolio</button>
                        </li>
                        <li className='navbar-item'>
                            <button className={`navbar-link ${activeComponent ==='contact' ? 'active': ''}`} onClick={()=> handleSetActiveComponent('contact')}>Contact</button>
                        </li>
                    </ul>
                </nav>
                <article className='principal-content'>
                    {activeComponent==='about' && <About/>}
                    {activeComponent==='resume' && <Resume/>}
                    {activeComponent==='portfolio' && <Port/>}
                    {activeComponent==='contact' && <Contact/>}
                </article>
            </div>
        
    )
}

export default Main;