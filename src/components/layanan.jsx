import '../layout/layanan.css'
import Taksi from '../assets/taxi.jpg'
import Cargo from '../assets/cargo.jpg'
import Kursus from '../assets/kursus.jpg'

const Layanan = ()=> {
    return (
        <>
            <div className="container_layanan">
                <div className="cards-layanan">
                    <div className="title">
                        <h1>layanan kami</h1>
                        <h2>berikut beberapa manfaat yang bisa anda dapatkan</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="ikon">
                                <img src={Taksi} alt="" />
                            </div>
                            <h3>Antar jemput</h3>
                            <p>Siap menjadi pemgemudi yang membawa anda ke tempat tujuan dengan aman dan nyaman</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <img src={Cargo} alt="" />
                            </div>
                            <h3>Antar Barang</h3>
                            <p>Siap menjadi pengemudi yang membawa barang anda ke tempat tujuan dengan aman</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <img src={Kursus} alt="" />
                            </div>
                            <h3>Kursus mengemudi</h3>
                            <p>Siap menjadi partner latihan mengemudi, pelanggan bisa request latihan harian atau ambil paket latihan</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Layanan;