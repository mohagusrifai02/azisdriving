import '../layout/keunggulan.css'

const Keunggulan = ()=> {
    return (
        <>
            <div className="container_keunggulan">
                <div className="cards-layanan">
                    <div className="title">
                        <h1>Keunggulan kami</h1>
                        <h2>Mengapa anda harus memilih azis driving?</h2>
                    </div>
                    <ul>
                        <li>
                            <div className="ikon">
                                <i class="fa-solid fa-phone-volume"></i>
                                <h3>
                                    Fast Response
                                </h3>
                            </div>
                            <p>Cepat dalam menanggapi pesanan, pelanggan tinggal klik tombol order, maka kami akan langsung membalas</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <i class="fa-solid fa-certificate"></i>
                                <h3>
                                    Lisensi
                                </h3>
                            </div>
                            <p>Kami mempunyai sertifikat driver dan sim B, yang dapat menunjang keamanan dan kemnyamanan dalam mengemudi</p>
                        </li>
                        <li>
                            <div className="ikon">
                                <i class="fa-solid fa-person-running"></i>
                                <h3>
                                    Pengalaman
                                </h3>
                            </div>
                            <p>Berbagai macam trayek pernah kami lalui, baik dalam dalam dan luar kota, baik untuk keperluan pribadi, dan lembaga</p>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Keunggulan;