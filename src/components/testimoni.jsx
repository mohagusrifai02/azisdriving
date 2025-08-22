import '../layout/food.css'
import React, {useState} from 'react';
import Taxi from '../assets/taxi.jpg'
import Kargo from '../assets/cargo.jpg'
import Kursus from '../assets/kursus.jpg'

const Testimoni = ()=> {
    const [current, setCurrent] = useState(0);

    const nextSlide =()=>{
        setCurrent((prev)=> (prev + 1 > 2 ? 0 : prev + 1));
    };

    const prevSlide = ()=>{
        setCurrent((prev)=> (prev - 1 < 0 ? 2 : prev - 1));
    };

    return (
        <>
            <div className="slider-container">
                {/* <div className="title">
                    <h1>Testimoni dari pelanggan</h1>
                </div> */}
                <ul className="slider">
                    <li className={current === 0 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Unknown</h3>
                                    <h4>"Drivernya professionel, bisa mengemudi dengan halus, komunikasinya juga ramah"</h4>
                                </div>
                            </div>
                            <img src={Taxi} alt="" />
                        </div>
                    </li>
                    <li className={current === 1 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Hamba Allah</h3>
                                    <h4>"Alhamdulillah, semua perabotan rumah saya aman sampai tujuan, tidak kehujanan padahal kondisi sedang hujan deras"</h4>
                                </div>
                            </div>
                            <img src={Kargo} alt="" />
                        </div>
                    </li>
                    <li className={current === 2 ? 'active' : ''}>
                        <div className="konten">
                            <div className="deskripsi">
                                <div className="des-name">
                                    <h3>Slamet</h3>
                                    <h4>"Pelatih yang keren, bisa menjelaskan sesuatu yang rumit dengan bahasa yang mudah dimengerti"</h4>
                                </div>
                            </div>
                            <img src={Kursus} alt="" />
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