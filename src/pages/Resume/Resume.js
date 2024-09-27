import './Resume.css'
import {IonIcon} from '@ionic/react'
import { bookOutline } from 'ionicons/icons';

function Resume(){
    const styles = {
        width: '80%'
    }
    return(
        <>
            <header>
                <h2 className='h2 article-title'>Resume</h2>
            </header>

            <section className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <IonIcon icon={bookOutline}></IonIcon>
                    </div>
                    <h3 className='h3'>Education</h3>
                </div>

                <ol className='timeline-list'>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>
                </ol>

            </section>

            <section className='timeline'>
                <div className='title-wrapper'>
                    <div className='icon-box'>
                        <IonIcon icon={bookOutline}></IonIcon>
                    </div>
                    <h3 className='h3'>Education</h3>
                </div>

                <ol className='timeline-list'>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>

                    <li className='timeline-item'>
                        <h4 className='h4 timeline-item-title'>Universidade</h4>
                        <span>2000 - 1000</span>
                        <p className='timeline-text'>
                            
                            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et quas molestias exceptur.
                        </p>
                    </li>
                </ol>

            </section>

            <section className='skill'>
                <h3 className='h3 skills-title'>
                    My Skills
                </h3>
                <ul className='skills-list content-card'>
                    <li className='skills-item'>
                        <div className='title-wrapper'>
                            <h5 className='h5'>
                                Web Design
                            </h5>
                            <data value='80'>
                                80%
                            </data>
                        </div>
                        <div className='skill-progress-bg'>
                            <div className='skill-progress-fill' style={styles}></div>
                        </div>
                    </li>
                    <li className='skills-item'>
                        <div className='title-wrapper'>
                            <h5 className='h5'>
                                Web Design
                            </h5>
                            <data value='80'>
                                80%
                            </data>
                        </div>
                        <div className='skill-progress-bg'>
                            <div className='skill-progress-fill' style={styles}></div>
                        </div>
                    </li>
                    <li className='skills-item'>
                        <div className='title-wrapper'>
                            <h5 className='h5'>
                                Web Design
                            </h5>
                            <data value='80'>
                                80%
                            </data>
                        </div>
                        <div className='skill-progress-bg'>
                            <div className='skill-progress-fill' style={styles}></div>
                        </div>
                    </li>
                    
                </ul>
            </section>
        
        </>
    )
}

export default Resume