
//SASS
import "./Footer.scss"

//Images
import email from '../../Assets/Images/email.svg'
import telegram from '../../Assets/Images/telegram.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <a href="/"><h2 className="header__logo">SOFIA</h2></a>
                    <ul className="footer__list">
                        <li className="footer__item">
                            <a href="mailto:alfarealdilafruz@gmail.com" target={"_blank"} rel="noreferrer" className="footer__link">
                                <img className="footer__icon" src={email} alt="email_ion" />
                                Эл. адрес
                            </a>
                        </li>
                        <li className="footer__item">
                            <a href="https://telegram.me/dilafruz_alfa_real" target={"_blank"} rel="noreferrer" className="footer__link">
                                <img className="footer__icon" src={telegram} alt="telegram_ion" />
                                Телеграмма
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer__buttom">
                <p>© Авторские права. Все права защищены</p>
            </div>
        </footer>
    )
}

export default Footer