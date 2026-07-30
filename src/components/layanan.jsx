import '../layout/layanan.css'
import Taksi from '../assets/taxi.jpg'
import Cargo from '../assets/cargo.jpg'
import Kursus from '../assets/kursus.jpg'

const Layanan = () => {
    return (
        <>
            <div className="container_layanan" id="layanan">
                <div className="cards-layanan">
                    <div className="title">
                        <span className="section-tag">Layanan</span>
                        <h1>Layanan kami</h1>
                        <h2>Berbagai solusi perjalanan dan pengiriman yang siap mendukung kebutuhan Anda sehari-hari.</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="ikon">
                                <img src={Taksi} alt="Antar jemput" />
                            </div>
                            <h3>Antar Jemput</h3>
                            <p>Siap mengantarkan Anda ke tempat tujuan dengan aman, nyaman, dan tepat waktu.</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <img src={Cargo} alt="Antar barang" />
                            </div>
                            <h3>Antar Barang</h3>
                            <p>Pengiriman barang aman dengan penanganan hati-hati dan layanan yang terpercaya.</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <img src={Kursus} alt="Kursus mengemudi" />
                            </div>
                            <h3>Kursus Mengemudi</h3>
                            <p>Partner latihan mengemudi yang sabar, informatif, dan siap membantu Anda berkembang.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Layanan;