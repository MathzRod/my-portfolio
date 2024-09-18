import './MenuLeft.css';
import {IonIcon} from '@ionic/react'
import { logoGithub, logoInstagram, chevronDownOutline, locationOutline, mailOutline, phonePortraitOutline, calendarOutline } from 'ionicons/icons';
import { useState } from 'react';

function MenuLeft(){
    
    const [isMoreInfoActive, setIsMoreInfoActive] = useState(false);


    const toggleMoreInfo = () =>{
        setIsMoreInfoActive(!isMoreInfoActive);
        document.querySelector('aside').classList.toggle('active', !isMoreInfoActive)
    }

    return(


        <aside className='sidebar'>
            <div className='sidebar-info'>
                <figure className='avatar-box' >
                    <img src='/img/avatar.png' alt='avatar' width='60px'></img>
                </figure>
                <div className='info-content'>
                    <h1 className='name'>Matheus Rodrigues</h1>
                    <p className='title'>Full Stack Developer</p>
                </div>
                <button className='info_more-btn' onClick={toggleMoreInfo}>
                    <span>Show Contacts</span>
                    <IonIcon icon={chevronDownOutline}></IonIcon>
                </button>
            </div>

            {isMoreInfoActive &&(
                <div className='sidebar-info_more'>
                <div className='separator'></div>
                <ul className='contacts-list'>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IonIcon icon={mailOutline}/>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-info'>Email</p>
                            <a href='mailto:mathzrodrsocial@gmail.com' className='contact-link'>mathzrodrsocial@gmail.com</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IonIcon icon={phonePortraitOutline}/>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-info'>Phone</p>
                            <a href='tel:+5511956580976' className='contact-link'>+55 11956580976</a>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IonIcon icon={calendarOutline}/>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-info'>Birthday</p>
                            <time dateTime='2001-08-20'>20 August, 2001</time>
                        </div>
                    </li>
                    <li className='contact-item'>
                        <div className='icon-box'>
                            <IonIcon icon={locationOutline}/>
                        </div>
                        <div className='contact-info'>
                            <p className='contact-info'>Address</p>
                            <address>São Paulo, Brazil</address>
                        </div>
                    </li>
                </ul>
                <div className='separator'></div>
                <ul className='social-list'>
                    <li className='social-item'>
                        <a href='https://www.instagram.com/itsthe_math/' className='social-link'>
                            <IonIcon icon={logoInstagram}></IonIcon>
                        </a>
                    </li>
                    <li className='social-item'>
                        <a href='https://www.instagram.com/itsthe_math/' className='social-link'>
                            <IonIcon icon={logoGithub}></IonIcon>
                        </a>
                    </li>
                </ul>
            </div>
            )}
            
        </aside>
    
    )
}

export default MenuLeft;