import {Link} from "react-router-dom"
import '../layout/navbar.css'
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons"

const Navbar = ()=>{
    const [isOpen, setIsOpen] = useState(false);
    const openMenu = ()=>{
        setIsOpen(!isOpen);
    }
    const closeMenu = ()=>{
        setIsOpen(false);
    }

    return (
        <>
            <nav>
                <div className="judul">
                    <h4>Azis Driving</h4>
                    <button className="i" onClick={openMenu}>
                        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
                    </button>
                </div>
                <ul className={`ulList ${isOpen ? 'open' : ''}`} onClick={closeMenu}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/layanan'>Layanan kami</Link></li>
                    <li><Link to='/keunggulan'>Keunggulan</Link></li>
                    <li><Link to='/testimoni'>Testimoni</Link></li>
                    <li><Link to='/kontak'>Kontak</Link></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar;