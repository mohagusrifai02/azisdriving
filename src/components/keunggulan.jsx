import '../layout/keunggulan.css'

const Keunggulan = () => {
    return (
        <>
            <div className="container_keunggulan" id="keunggulan">
                <div className="cards-layanan">
                    <div className="title">
                        <span className="section-tag">Keunggulan</span>
                        <h1>Keunggulan kami</h1>
                        <h2>Mengapa Anda harus memilih Azis Driving sebagai mitra perjalanan Anda?</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="ikon">
                                <i className="fa-solid fa-phone-volume"></i>
                                <h3>Fast Response</h3>
                            </div>
                            <p>Respon cepat terhadap setiap pesanan agar perjalanan Anda tetap nyaman dan efisien.</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <i className="fa-solid fa-certificate"></i>
                                <h3>Lisensi Lengkap</h3>
                            </div>
                            <p>Memiliki sertifikat dan SIM A yang mendukung keamanan dan kenyamanan selama berkendara.</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <i className="fa-solid fa-person-running"></i>
                                <h3>Pengalaman</h3>
                            </div>
                            <p>Berpengalaman melayani berbagai rute dalam kota dan luar kota untuk kebutuhan pribadi maupun lembaga.</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Keunggulan;