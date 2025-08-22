import Ojek from '../assets/ojekonline.png'
import '../layout/home.css'
import Layanan from './layanan'
import Keunggulan from './keunggulan'
import Testimoni from './testimoni'
import Kontak from './kontak'
import Driving from '../assets/driving.png'

const Home = ()=> {
    return (
        <>
            <div className="container_home">
                <div className="overlay"></div>
                <div className="cards">
                    <div className="img">
                        <img src={Driving} alt="" />
                    </div>
                    <div className="card">
                        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                            <path d="M0,100 Q50,90 100,0 L100,100 Z" fill="#2CA89A" />
                        </svg>
                        <div className="title-home">
                            <div className="medsos">
                                <div className="ikon">
                                    <i class="fa-brands fa-instagram"></i>&nbsp;
                                    <p>azismuslim12</p>
                                </div>
                                <div className="ikon">
                                    <i class="fa-solid fa-envelope"></i> &nbsp;
                                    <p>azismuslim@gmail.com</p>
                                </div>
                            </div>
                            <h1>Azis Driving</h1>
                            <p>Selamat datang pengunjung yang berbahagia</p>
                        </div>
                        <div className="caption-home">
                            <h2>Kami melayani jasa mengemudi baik dalam kota maupun luar kota, silahkan scroll website ini untuk cari tau tentang saya, atau pesan sekarang</h2>
                            <a href='https://wa.me/6282325091045?text=Halo%20Azis%2C%20saya%20ingin%20pesan%20ojek' target="_blank" className='tombol-wa' rel="noopener noreferrer">
                                <i class="fa-brands fa-whatsapp"></i>&nbsp;
                                <span>Order</span>
                            </a>
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