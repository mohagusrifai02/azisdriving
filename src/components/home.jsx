import '../layout/home.css'
import Layanan from './layanan'
import Keunggulan from './keunggulan'
import Testimoni from './testimoni'
import Kontak from './kontak'
import Driving from '../assets/driving.png'

const Home = () => {
    return (
        <>
            <div className="container_home">
                <div className="cards">
                    <div className="img">
                        <div className="image-card">
                            <img src={Driving} alt="Driver professional" />
                        </div>
                    </div>
                    <div className="card">
                        <div className="eyebrow">Layanan driver profesional</div>
                        <div className="title-home">
                            <h1>Aziz Driver</h1>
                            <p>Solusi perjalanan aman, nyaman, dan terpercaya untuk kebutuhan dalam kota maupun luar kota.</p>
                        </div>
                        <div className="caption-home">
                            <div className="highlights">
                                <span>24/7</span>
                                <span>Berpengalaman</span>
                                <span>Harga Transparan</span>
                            </div>
                            <h2>Siap mengantar Anda dengan sopan, tepat waktu, dan fokus pada kenyamanan perjalanan setiap hari.</h2>
                            <div className="actions">
                                <a href='https://wa.me/628971254455?text=Halo%20Azis%2C%20saya%20ingin%20pesan%20jasa%20driver' target="_blank" className='tombol-wa' rel="noopener noreferrer">
                                    <i className="fa-brands fa-whatsapp"></i>&nbsp;
                                    <span>Pesan Sekarang</span>
                                </a>
                                <a href="#layanan" className='tombol-secondary'>Lihat Layanan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Layanan />
            <Keunggulan />
            <Testimoni />
            <Kontak />
        </>
    )
}

export default Home;