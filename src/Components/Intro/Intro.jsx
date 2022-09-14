//SASS
import "./Intro.scss";

//Images
import intro__fon from "../../Assets/Images/intro_fon.png";

function Intro() {
  return (
    <section className="intro">
      <div className="container">
        <div className="intro__wrapper">
          <div className="intro__aside">
            <h1 className="intro__title">
              Качественные и недорогие носки вы можете найти только у нас
            </h1>
            <p className="intro__text">
              Предлагаем оптовые поставки носков из Узбекистана из
              высококачественные материалы по низкой цене в аэропорт Перта
              (Вашингтон) и другие штаты Австралии. Мы можем изготовить носки
              любой состав, дизайн и цвет по желанию заказчика. Наш изделие
              изготовлено из 100% хлопка. Узбекский хлопок отличного качества.
              качественный. Условия платежного аккредитива.
            </p>
          </div>
          <div className="intro__bside">
            <img className="intro__pic" src={intro__fon} alt="intro_image" />
          </div>
        </div>
      </div>
      <div className="intro__button-bg"></div>
    </section>
  );
}

export default Intro;
