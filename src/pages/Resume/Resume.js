import './Resume.css'

function Resume(){
    return(
        <div className='resume-content'>
            <div className='all-timelines'>
                <section className='education-timeline'>
                    <div className='title-wrapper'>
                        <div className='icon-box'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="none" stroke="#98FF98" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18s-3.332.477-4.5 1.253"/></svg>
                        </div>
                        <h2>Education</h2>
                    </div>
                    <ul className='timeline'>
                        <li>
                            <h3>Universidade Estácio</h3>
                            <span>2024 - 2027</span>
                            <p>Nemo enim ipsam voluptatem, blanditiis praesentium...</p>
                        </li>
                        <li>
                            <h3>Instituto Politécnico de Bragança</h3>
                            <span>2022 - 2023 (intercâmbio)</span>
                            <p>Nemo enim ipsam voluptatem, blanditiis praesentium...</p>
                        </li>
                        <li>
                            <h3>Instituto Federal de São Paulo - SP</h3>
                            <span>2020 - 2027</span>
                            <p>Nemo enim ipsam voluptatem, blanditiis praesentium...</p>
                        </li>
                        <li>
                            <h3>Instituto Federal de São Paulo - Pirituba</h3>
                            <span>2017 - 2019</span>
                            <p>Nemo enim ipsam voluptatem, blanditiis praesentium...</p>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
    )
}

export default Resume