import '../layout/kontak.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faLocationDot, faCopyright } from '@fortawesome/free-solid-svg-icons'

const Kontak = () => {
    return (
        <>
            <div className="container_kontak" id="kontak">
                <h1>Hubungi Kami</h1>
                <div className="informasi_kontak">
                    <div className="kontak">
                        <h2>Informasi Kontak</h2>
                        <div className="ikon">
                            <div className="alamat">
                                <FontAwesomeIcon icon={faLocationDot} className="lokasi" />
                                <span>Surabaya, Jawa Timur</span>
                            </div>
                            <div className="wa">
                                <FontAwesomeIcon icon={faWhatsapp} style={{ color: '#25D366' }} />
                                <span>0897-1254-455</span>
                            </div>
                            <div className="yt">
                                <FontAwesomeIcon icon={faYoutube} style={{ color: '#FF0000' }} />
                                <span>Aziz Driver</span>
                            </div>
                        </div>
                    </div>
                    <div className="maps">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.318876788614!2d112.74778907411292!3d-7.318031471957579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb006640b007%3A0x8dc275dfd69d2dd3!2sMitra%20Da&#39;i%20Nusantara%20(MDN)!5e0!3m2!1sen!2sid!4v1758552902290!5m2!1sen!2sid"
                            width="100%"
                            height="100%"
                            style={{ border: 0, borderRadius: '18px' }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
                <div className="footer">
                    <FontAwesomeIcon icon={faCopyright} />
                    <span>Copyright Abdul Aziz Muslim. All rights reserved.</span>
                </div>
            </div>
        </>
    )
}

export default Kontak;