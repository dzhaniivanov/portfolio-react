import "./Contact.scss"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';



export default function Contact() {


    return (
        <div className="contact" id="contact">
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contacts</h2>
                <div className="wrapper">
                    <a href="https://github.com/dzhaniivanov94" className="contactItem">
                        <GitHubIcon className="icon" />
                    </a>
                    <a className="contactItem" href="https://www.facebook.com/djani.ivanov">
                        <FacebookIcon className="icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/dzhani-ivanov-182412206/" className="contactItem">
                        <LinkedInIcon className="icon" />
                    </a>
                </div>
            </div>
        </div>
    )
}
