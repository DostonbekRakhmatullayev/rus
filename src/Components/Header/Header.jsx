import { useRef } from "react"

//SASS
import "./Header.scss"

//Images
import bar from '../../Assets/Images/bar.svg'

function Header() {
    let modal = useRef()

    const openModal = e => {
        modal.current && modal.current.classList.add("header__modal--active")
    }
    
    const closeModal = e => {
        modal.current && modal.current.classList.remove("header__modal--active")
    }
    return (
        <header className="header">
            <div className="container">
                <nav className="header__nav">
                    <a href="/"><h2 className="header__logo">SOFIA</h2></a>
                    <div className="header__box">
                        <ul className="header__list">
                            <li className="header__item">
                                <a className="header__link" href="/">Дом</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="#product">Товары</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="/">О нас</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="/contact">Контакт</a>
                            </li>
                            <li className="header__item">
                                <a className="header__link" href="tel: +61420311975">+61 420 311 975</a>
                            </li>
                        </ul>
                        <button onClick={openModal} className="header__burger"><img src={bar} alt="bar"/></button>
                    </div>
                    <div ref={modal} className="header__modal">
                        <button className="header__modal--close" onClick={closeModal}>X</button>
                        <ul className="header__modal--list">
                            <li className="header__modal--item">
                                <a className="header__link" href="/">Home</a>
                            </li>
                            <li className="header__modal--item">
                                <a className="header__link" href="#product">Products</a>
                            </li>
                            <li className="header__modal--item">
                                <a className="header__link" href="/contact">Contact</a>
                            </li>
                            <li className="header__modal--item">
                                <a className="header__link" href="/">About us</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    )
}

export default Header