import "./Contact.css"
import { IonIcon } from "@ionic/react"
import { paperPlane } from "ionicons/icons"

function Contact(){
    return(
        <>
            <header>
                <h2 className="h2 article-title" data-page='contact'>
                    Contact
                </h2>
            </header>
            <section className="mapbox" data-mapbox>
                <figure>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d467690.14386865456!2d-46.92495573160536!3d-23.682063556622076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce448183a461d1%3A0x9ba94b08ff335bae!2zU8OjbyBQYXVsbywgU1A!5e0!3m2!1spt-BR!2sbr!4v1727129505080!5m2!1spt-BR!2sbr"    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </figure>
            </section>

            <section className="contact-form">
                <h3 className="h3 form-title">
                    Contact Form
                </h3>
                <form action="#" className="form" data-form>
                    <div className="input-wrapper">
                        <input type="text" name="fullname" className="form-input" placeholder="Full name" required data-form-input></input>
                        <input type="email" name="email" className="form-input" placeholder="Email address" required data-form-input></input>
                    </div>
                    <textarea name="message" className="form-input" placeholder="Your Message" required data-form-input></textarea>
                    <button className="form-btn" type="submit" disabled data-form-btn>
                        <IonIcon icon={paperPlane}></IonIcon>
                        <span>Send Message</span>
                    </button>
                </form>
            </section>
        </>
    )
}

export default Contact