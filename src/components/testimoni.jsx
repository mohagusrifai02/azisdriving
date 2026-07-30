import '../layout/food.css'
import { useState } from 'react';
import Taxi from '../assets/taxi.jpg'
import Kargo from '../assets/cargo.jpg'
import Kursus from '../assets/kursus.jpg'

const Testimoni = () => {
    const [current, setCurrent] = useState(0);

    const nextSlide = () => {
        setCurrent((prev) => (prev + 1 > 2 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev - 1 < 0 ? 2 : prev - 1));
    };

    return (
        <>
            <div className="slider-container" id="testimoni">
                <div className="section-header">
                    <span className="section-tag">Testimoni</span>
                    <h1>Yang pelanggan katakan tentang kami</h1>
                </div>
                <ul className="slider">
                    <li className={current === 0 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Unknown</h3>
                                    <h4>“Drivernya profesional, bisa mengemudi dengan halus, dan komunikasinya sangat ramah.”</h4>
                                </div>
                            </div>
                            <img src={Taxi} alt="Testimoni antar jemput" />
                        </div>
                    </li>
                    <li className={current === 1 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Hamba Allah</h3>
                                    <h4>“Alhamdulillah, semua barang sampai tujuan aman dan tetap terjaga meskipun hujan deras.”</h4>
                                </div>
                            </div>
                            <img src={Kargo} alt="Testimoni antar barang" />
                        </div>
                    </li>
                    <li className={current === 2 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Slamet</h3>
                                    <h4>“Pelatih yang keren, bisa menjelaskan materi dengan bahasa yang mudah dipahami.”</h4>
                                </div>
                            </div>
                            <img src={Kursus} alt="Testimoni kursus mengemudi" />
                        </div>
                    </li>
                </ul>
                <button className="prev" onClick={prevSlide}>Prev</button>
                <button className="next" onClick={nextSlide}>Next</button>
            </div>
        </>
    )
}

export default Testimoni;