import '../layout/kontak.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faEnvelope, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Kontak = (()=> {
    return(
        <>
            <div className="container_kontak">
                <h1>Contact Me</h1>
                <div className="informasi_kontak">
                    <div className="kontak">
                        <h2>Informasi kontak</h2>
                        <div className="ikon">
                            <div className="alamat">
                                <FontAwesomeIcon icon={faLocationDot} className="lokasi"/> &nbsp;
                                <span>Surabaya, Jatim</span>
                            </div>
                            <div className="fb">
                                <FontAwesomeIcon icon={faFacebook} style={{color:'#4285F4'}}/> &nbsp;
                                <span>Abdulazis</span>
                            </div>
                            <div className="wa">
                                <FontAwesomeIcon icon={faWhatsapp} style={{color:'#128C7E'}}/> &nbsp;
                                <span>0823-2509-1045</span>
                            </div>
                            <div className="yt">
                                <FontAwesomeIcon icon={faYoutube} color='rgba(255, 0, 0, 0.712)'/> &nbsp;
                                <span>azis</span>
                            </div>
                            <div className="email">
                                <FontAwesomeIcon icon={faEnvelope} color='rgb(250, 128, 114)'/> &nbsp;
                                <span>azismuslim@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="maps">
                        <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15844.580864618563!2d109.19622518350548!3d-6.873198086368489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6fc7e672a1f36d%3A0x5027a76e3566510!2sKramat%2C%20Tegal%20Regency%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1754758230279!5m2!1sen!2sid" 
                        width="100%" 
                        height="100%" 
                        style={{ border:0 }} 
                        allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="footer">
                    <FontAwesomeIcon icon={faCopyright} />
                    <span>Copyright abdul azis muslim allright reserved 2025</span>
                </div>
            </div>
        </>
    )
})


export default Kontak;